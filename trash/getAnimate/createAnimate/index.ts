import type { Props } from "../index";
import { _sceneActive, _isAnimating, _animations, _autoProgress, _introAutoProgress } from "@stores";
import { get } from "svelte/store";

export function createAnimate(props: Props): Props {
  const { camera, controls, mappers, sceneProgress, data } = props;
  const { mode, index, hasLogoIntro } = data;
  const { number, part, image, logo } = data.elements;
  let isAuto = mode === "auto";
  let isFirst = true;

  get(_animations).forEach((item) => {
    item.stop();
  });

  return {
    ...props,
    animate: function ({ scrollY }) {
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
          if (image || logo) {
            mappers.partyMapper({ progress: isAuto ? autoP : mainProgress });
          }
          if (part) {
            mappers.partMapper({ progress: isAuto ? autoP : mainProgress });
          }
        }
      }
    },
  };
}
