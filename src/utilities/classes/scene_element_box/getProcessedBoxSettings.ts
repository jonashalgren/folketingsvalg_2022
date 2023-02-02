import type { S_Settings, S_S_E_Box } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  boxSettings: S_S_E_Box;
  sceneSettings: S_Settings;
};

export function getProcessedBoxSettings({ boxSettings, sceneSettings }: Props): S_S_E_Box {
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
