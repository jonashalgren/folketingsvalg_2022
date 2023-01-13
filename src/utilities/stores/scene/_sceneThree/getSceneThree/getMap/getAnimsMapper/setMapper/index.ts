import { animateAreaMesh } from "./animateAreaMesh";
import type { S_Anims_Mappers, S_Map_Area_Id } from "@models";
import type { Props } from "../index";
import { animate, easeIn, interpolate } from "popmotion";
import isEqual from "lodash.isequal";

export function setMapper(item: Props) {
  let localProgress = undefined;
  let isFading = false;
  let localActiveAreas: S_Map_Area_Id[] = [];
  let activeAreas = [];
  const fadeInMapper = interpolate([0, 1], [0.1, 1]);
  const fadeOutMapper = interpolate([0, 1], [1, 0.1]);

  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      if (localProgress !== progress) {
        const focusList = item.data?.focus ?? [];
        activeAreas = focusList
          .filter(({ inputRange }) => inputRange[0] <= progress && inputRange[1] >= progress)
          .flatMap((item) => item.areas);

        localProgress = progress;

        item.mapperProperties.forEach(({ meshes, valueMapper, colorMapper }) => {
          const value = valueMapper(progress);
          const color = colorMapper(progress);
          animateAreaMesh({ meshes, color, value });
        });
      }

      if (!isFading && !isEqual(activeAreas, localActiveAreas)) {
        localActiveAreas = activeAreas;
        isFading = true;
        animate({
          from: 0,
          to: 1,
          duration: 600,
          ease: easeIn,
          onUpdate: (progress) => {
            const fadeIn = fadeInMapper(progress);
            const fadeOut = fadeOutMapper(progress);
            item.mapperProperties.forEach((item) => {
              const deactivatedArea = localActiveAreas.length > 0 && !localActiveAreas.includes(item.id);
              item.meshes.forEach((mesh) => {
                if (deactivatedArea && !mesh.userData.isFaded) {
                  mesh.material.opacity = fadeOut;
                } else if (!deactivatedArea && mesh.userData.isFaded) {
                  mesh.material.opacity = fadeIn;
                }
              });
            });
          },
          onComplete: () => {
            item.mapperProperties.forEach((item) => {
              const deactivatedArea = localActiveAreas.length > 0 && !localActiveAreas.includes(item.id);
              item.meshes.forEach((mesh) => {
                if (deactivatedArea && !mesh.userData.isFaded) {
                  mesh.userData.isFaded = true;
                } else if (!deactivatedArea && mesh.userData.isFaded) {
                  mesh.userData.isFaded = false;
                }
              });
            });
            isFading = false;
          },
        });
      }
    },
  };
}
