import type { Props } from "./index";

export function setMapperProgressAuto(item: Props): Props {
  let autoProgress = 0;
  let autoDuration = item?.sceneSettings?.autoDuration ?? 1000;
  let autoStep = 16.6 / autoDuration;

  return {
    ...item,
    mapperProgressAuto: function () {
      if (autoProgress >= 1) {
        autoProgress = 0;
      }

      autoProgress += autoStep;

      if (autoProgress >= 1) {
        autoProgress = 1;
      }
      return autoProgress;
    },
  };
}
