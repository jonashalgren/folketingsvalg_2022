import { C_C_Element_Type, type C_Content_Settings, type C_C_S_Element_Box } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  elementSettings: C_C_S_Element_Box;
  contentSettings: C_Content_Settings;
};

export function getProcessedBoxSettings({ elementSettings, contentSettings }: Props): C_C_S_Element_Box {
  return {
    ...elementSettings,
    type: C_C_Element_Type.box,
    motion: {
      ...elementSettings.motion,
      outputRange: {
        position: getProcessedOutputRangeList({
          dimensionZ: contentSettings.dimensionZ,
          originalOutputRangeList: elementSettings.motion.outputRange.position ?? [],
        }),
        scale: getProcessedOutputRangeList({
          dimensionZ: contentSettings.dimensionZ,
          originalOutputRangeList: elementSettings.motion.outputRange.scale ?? [],
        }),
      },
    },
  };
}
