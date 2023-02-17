import type { C_Scene_Settings, C_S_S_Element_Number } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  elementSettings: C_S_S_Element_Number;
  sceneSettings: C_Scene_Settings;
};

export function getProcessedNumberSettings({ elementSettings, sceneSettings }: Props): C_S_S_Element_Number {
  return {
    ...elementSettings,
    motion: {
      ...elementSettings.motion,
      position: {
        ...elementSettings.motion.position,
        outputRange: getProcessedOutputRangeList({
          dimensionZ: sceneSettings.dimensionZ,
          originalOutputRangeList: elementSettings.motion.position.outputRange,
        }),
      },
    },
  };
}
