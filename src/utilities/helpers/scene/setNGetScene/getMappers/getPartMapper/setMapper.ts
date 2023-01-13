import type { S_Anims_Mappers } from "@models";
import type { Props } from "./index";
import isEqual from "lodash.isequal";
import { animate, interpolate, easeIn } from "popmotion";

export function setMapper(item: Props) {
  let localProgress = undefined;
  let isFading = false;
  let localActiveParts = [];
  let activeParts = [];
  const fadeInMapper = interpolate([0, 1], [0.3, 1]);
  const fadeOutMapper = interpolate([0, 1], [1, 0.3]);

  if (item.properties.length > 0) {
    item.group.add(...item.properties[0].parts.flatMap((item) => item.group));
  }

  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      if (item.properties.length > 0) {
        if (localProgress !== progress && item?.part) {
          localProgress = progress;
          activeParts = item.properties[0].parts.filter(
            ({ inputRanges }) =>
              inputRanges.filter((item) => item[0] <= progress && item[1] >= progress).length > 0
          );
        }

        if (!isFading && !isEqual(activeParts, localActiveParts) && item.properties[0]) {
          localActiveParts = activeParts;
          isFading = true;
          let fadeInList = [];
          let fadeOutList = [];

          item.properties[0].parts.forEach((item) => {
            const isFadingOut =
              item.inputRanges.filter((entry) => entry[0] <= progress && entry[1] >= progress).length > 0;
            if (isFadingOut) {
              fadeOutList.push(item);
            } else {
              fadeInList.push(item);
            }
          });
          animate({
            from: 0,
            to: 1,
            duration: 600,
            ease: easeIn,
            onUpdate: (val) => {
              const fadeIn = fadeInMapper(val);
              const fadeOut = fadeOutMapper(val);
              fadeOutList.forEach((item) => {
                if (!item.group.userData.isFaded) {
                  item.group.children.forEach((item: any) => {
                    item.material.opacity = fadeOut;
                  });
                }
              });

              fadeInList.forEach((item) => {
                if (item.group.userData.isFaded) {
                  item.group.children.forEach((item: any) => {
                    item.material.opacity = fadeIn;
                  });
                }
              });
            },
            onComplete: () => {
              fadeOutList.forEach((item) => {
                item.group.userData.isFaded = true;
              });
              fadeInList.forEach((item) => {
                item.group.userData.isFaded = false;
              });
              isFading = false;
            },
          });
        }
      }
    },
  };
}
