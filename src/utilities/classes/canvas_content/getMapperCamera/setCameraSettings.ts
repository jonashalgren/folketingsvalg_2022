import { getProcessedOutputRangeItem, getProcessedOutputRangeList } from "@helpers";
import type { Props } from "./index";

export function setCameraSettings(item: Props): Props {
  const { camera, dimensionZ } = item.sceneSettings;

  return {
    ...item,
    cameraSettings: {
      positionMain: {
        ...camera.positionMain,
        outputRange: getProcessedOutputRangeList({
          dimensionZ: dimensionZ,
          originalOutputRangeList: camera.positionMain.outputRange,
        }),
      },
      targetMain: {
        ...camera.targetMain,
        outputRange: getProcessedOutputRangeList({
          dimensionZ: dimensionZ,
          originalOutputRangeList: camera.targetMain.outputRange,
        }),
      },
      positionEntry: getProcessedOutputRangeItem({
        dimensionZ: dimensionZ,
        originalOutputRangeItem: camera.positionEntry,
      }),
      targetEntry: getProcessedOutputRangeItem({
        dimensionZ: dimensionZ,
        originalOutputRangeItem: camera.targetEntry,
      }),
      positionExit: getProcessedOutputRangeItem({
        dimensionZ: dimensionZ,
        originalOutputRangeItem: camera.positionExit,
      }),
      targetExit: getProcessedOutputRangeItem({
        dimensionZ: dimensionZ,
        originalOutputRangeItem: camera.targetExit,
      }),
    },
  };
}
