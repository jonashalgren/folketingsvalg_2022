import type { C_Scene_Settings, C_S_S_Element_Text } from "@models";
import { getProcessedOutputRangeItem } from "@helpers";

type Props = {
  elementSettings: C_S_S_Element_Text;
  sceneSettings: C_Scene_Settings;
};

export function getProcessedTextSettings({ elementSettings, sceneSettings }: Props): C_S_S_Element_Text {
  return {
    ...elementSettings,
    position: getProcessedOutputRangeItem({
      dimensionZ: sceneSettings.dimensionZ,
      originalOutputRangeItem: elementSettings.position,
    }),
  };
}
