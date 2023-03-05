import type { C_S_S_Element_Box } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  elementSettings: C_S_S_Element_Box;
  dimensionZ: number;
};

export function getProcessedBoxSettings({ elementSettings, dimensionZ }: Props): C_S_S_Element_Box {
  return {
    ...elementSettings,
    motion: {
      ...elementSettings.motion,
      outputRange: {
        position: getProcessedOutputRangeList({
          dimensionZ,
          originalOutputRangeList: elementSettings.motion.outputRange.position ?? [],
        }),
        scale: getProcessedOutputRangeList({
          dimensionZ,
          originalOutputRangeList: elementSettings.motion.outputRange.scale ?? [],
        }),
      },
    },
  };
}
