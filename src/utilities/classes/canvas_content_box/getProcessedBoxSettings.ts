import type { C_Content_Settings, C_C_S_Element_Box } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  boxSettings: C_C_S_Element_Box;
  contentSettings: C_Content_Settings;
};

export function getProcessedBoxSettings({ boxSettings, contentSettings }: Props): C_C_S_Element_Box {
  return {
    ...boxSettings,
    type: "box",
    motion: {
      ...boxSettings.motion,
      outputRange: {
        position: getProcessedOutputRangeList({
          dimensionZ: contentSettings.dimensionZ,
          originalOutputRangeList: boxSettings.motion.outputRange.position ?? [],
        }),
        scale: getProcessedOutputRangeList({
          dimensionZ: contentSettings.dimensionZ,
          originalOutputRangeList: boxSettings.motion.outputRange.scale ?? [],
        }),
      },
    },
  };
}
