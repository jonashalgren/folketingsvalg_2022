import type { S, S_Progress, S_Three_Render, S_Mappers, S_Anims_Mappers } from "@models";
import type { PerspectiveCamera, Scene } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { _sceneActive, _isAnimating, _animations, _autoProgress, _introAutoProgress } from "@stores";
import { get } from "svelte/store";

type Props = {
  data: S;
  camera: PerspectiveCamera;
  controls: OrbitControls;
  sceneProgress: S_Progress;
  scene: Scene;
  mappers: S_Mappers;
  animsMapper: ({ progress }: S_Anims_Mappers) => void;
};

export function getRender({ camera, controls, mappers, scene, sceneProgress, animsMapper, data }: Props) {
  const { mode, index, hasLogoIntro, number, part, partyLeader, partyLogo, sceneVariant } = data;
  let isAuto = mode === "auto";
  let isFirst = true;

  get(_animations).forEach((item) => {
    item.stop();
  });

  return function ({ renderer, scrollY }: S_Three_Render) {
    let isActive = get(_sceneActive) === index;

    const entryProgress = sceneProgress.entry(scrollY);
    if (isActive || entryProgress > 0) {
      const mainProgress = sceneProgress.main(scrollY);
      const exitProgress = sceneProgress.exit(scrollY);
      if (isActive) {
        mappers.cameraExitPositionMapper({ progress: exitProgress, camera });
        mappers.cameraMainPositionMapper({ progress: mainProgress, camera });
      }
      mappers.cameraEntryPositionMapper({ progress: entryProgress, camera });

      if (isActive) {
        mappers.cameraExitTargetMapper({ progress: exitProgress, controls });
        mappers.cameraMainTargetMapper({ progress: mainProgress, controls });
      }

      mappers.cameraEntryTargetMapper({ progress: entryProgress, controls });
      mappers.transitionOpacityMapper({ progress: entryProgress });
      if (hasLogoIntro) {
        mappers.transitionLogoMapper({ progress: entryProgress });
      }

      if (isActive || isFirst) {
        isFirst = false;
        const autoP = data.index === 0 ? get(_introAutoProgress) : get(_autoProgress);
        if (number) {
          mappers.numberMapper({ progress: isAuto ? autoP : mainProgress });
        }
        if (partyLeader || partyLogo) {
          mappers.partyMapper({ progress: isAuto ? autoP : mainProgress });
        }
        if (part) {
          mappers.partMapper({ progress: isAuto ? autoP : mainProgress });
        }
        if (sceneVariant !== "blank") {
          animsMapper({ progress: isAuto ? autoP : mainProgress });
        }
      }

      controls.update();

      renderer.render(scene, camera);
    }
  };
}
