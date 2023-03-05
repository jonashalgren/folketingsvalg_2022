import type { C_S_S_Element_Number } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  elementSettings: C_S_S_Element_Number;
  dimensionZ: number;
};

export function getProcessedNumberSettings({ elementSettings, dimensionZ }: Props): C_S_S_Element_Number {
  return {
    ...elementSettings,
    motion: {
      ...elementSettings.motion,
      position: {
        ...elementSettings.motion.position,
        outputRange: getProcessedOutputRangeList({
          dimensionZ,
          originalOutputRangeList: elementSettings.motion.position.outputRange,
        }),
      },
    },
  };
}
