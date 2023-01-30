import type { Props } from "./index";
import { getProcessedOutputRangeItem, getProcessedOutputRangeList } from "@helpers";

export function setCamera(item: Props): Props {
  return {
    ...item,
    data: {
      ...item.data,
      camera: {
        positionMain: {
          ...item.data.camera.positionMain,
          outputRange: getProcessedOutputRangeList({
            sceneDimensionZ: item.data.sceneDimensionZ,
            originalOutputRange: item.data.camera.positionMain.outputRange,
          }),
        },
        targetMain: {
          ...item.data.camera.targetMain,
          outputRange: getProcessedOutputRangeList({
            sceneDimensionZ: item.data.sceneDimensionZ,
            originalOutputRange: item.data.camera.targetMain.outputRange,
          }),
        },
        positionEntry: getProcessedOutputRangeItem({
          sceneDimensionZ: item.data.sceneDimensionZ,
          originalOutputRange: item.data.camera.positionEntry,
        }),
        targetEntry: getProcessedOutputRangeItem({
          sceneDimensionZ: item.data.sceneDimensionZ,
          originalOutputRange: item.data.camera.targetEntry,
        }),
        positionExit: getProcessedOutputRangeItem({
          sceneDimensionZ: item.data.sceneDimensionZ,
          originalOutputRange: item.data.camera.positionExit,
        }),
        targetExit: getProcessedOutputRangeItem({
          sceneDimensionZ: item.data.sceneDimensionZ,
          originalOutputRange: item.data.camera.targetExit,
        }),
      },
    },
  };
}
