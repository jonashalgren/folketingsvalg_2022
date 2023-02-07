import type { C_S_Settings, C_S_S_E_Box } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  boxSettings: C_S_S_E_Box;
  sceneSettings: C_S_Settings;
};

export function getProcessedBoxSettings({ boxSettings, sceneSettings }: Props): C_S_S_E_Box {
  return {
    ...boxSettings,
    type: "box",
    motion: {
      ...boxSettings.motion,
      outputRange: {
        position: getProcessedOutputRangeList({
          dimensionZ: sceneSettings.dimensionZ,
          originalOutputRangeList: boxSettings.motion.outputRange.position ?? [],
        }),
        scale: getProcessedOutputRangeList({
          dimensionZ: sceneSettings.dimensionZ,
          originalOutputRangeList: boxSettings.motion.outputRange.scale ?? [],
        }),
      },
    },
  };
}
