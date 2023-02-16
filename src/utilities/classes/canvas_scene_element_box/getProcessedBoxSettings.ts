import { C_S_Element_Type, type C_Scene_Settings, type C_S_S_Element_Box } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  elementSettings: C_S_S_Element_Box;
  sceneSettings: C_Scene_Settings;
};

export function getProcessedBoxSettings({ elementSettings, sceneSettings }: Props): C_S_S_Element_Box {
  return {
    ...elementSettings,
    type: C_S_Element_Type.box,
    motion: {
      ...elementSettings.motion,
      outputRange: {
        position: getProcessedOutputRangeList({
          dimensionZ: sceneSettings.dimensionZ,
          originalOutputRangeList: elementSettings.motion.outputRange.position ?? [],
        }),
        scale: getProcessedOutputRangeList({
          dimensionZ: sceneSettings.dimensionZ,
          originalOutputRangeList: elementSettings.motion.outputRange.scale ?? [],
        }),
      },
    },
  };
}
