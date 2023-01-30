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
          originalOutputRange: camera.positionMain.outputRange,
        }),
      },
      targetMain: {
        ...camera.targetMain,
        outputRange: getProcessedOutputRangeList({
          dimensionZ: item.dimensionZ,
          originalOutputRange: camera.targetMain.outputRange,
        }),
      },
      positionEntry: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRange: camera.positionEntry,
      }),
      targetEntry: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRange: camera.targetEntry,
      }),
      positionExit: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRange: camera.positionExit,
      }),
      targetExit: getProcessedOutputRangeItem({
        dimensionZ: item.dimensionZ,
        originalOutputRange: camera.targetExit,
      }),
    },
  };
}
