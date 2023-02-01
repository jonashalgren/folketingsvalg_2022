import { getProcessedOutputRangeItem, getProcessedOutputRangeList } from "@helpers";
import type { Props } from "./index";

export function setProcessedCameraData(item: Props): Props {
  const { camera } = item.data;
  return {
    ...item,
    processedCameraData: {
      positionMain: {
        ...camera.positionMain,
        outputRange: getProcessedOutputRangeList({
          dimensionZ: item.dimensionZ,
          originalOutputRangeList: camera.positionMain.outputRange,
        }),
      },
      targetMain: {
        ...camera.targetMain,
        outputRange: getProcessedOutputRangeList({
          dimensionZ: item.dimensionZ,
          originalOutputRangeList: camera.targetMain.outputRange,
        }),
      },
      positionEntry: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRangeItem: camera.positionEntry,
      }),
      targetEntry: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRangeItem: camera.targetEntry,
      }),
      positionExit: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRangeItem: camera.positionExit,
      }),
      targetExit: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRangeItem: camera.targetExit,
      }),
    },
  };
}
