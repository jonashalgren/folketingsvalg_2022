import type { S_E_Box_Data } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  dimensionZ: number;
  data: S_E_Box_Data;
};

export function getProcessedBoxData({ data, dimensionZ }: Props): S_E_Box_Data {
  return {
    ...data,
    type: "box",
    motion: {
      ...data.motion,
      outputRange: {
        position: getProcessedOutputRangeList({
          dimensionZ,
          originalOutputRange: data.motion.outputRange.position ?? [],
        }),
        scale: getProcessedOutputRangeList({
          dimensionZ,
          originalOutputRange: data.motion.outputRange.scale ?? [],
        }),
      },
    },
  };
}
