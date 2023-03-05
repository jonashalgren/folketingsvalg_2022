import type { C_S_S_Element_Text } from "@models";
import { getProcessedOutputRangeItem } from "@helpers";

type Props = {
  elementSettings: C_S_S_Element_Text;
  dimensionZ: number;
};

export function getProcessedTextSettings({ elementSettings, dimensionZ }: Props): C_S_S_Element_Text {
  return {
    ...elementSettings,
    position: getProcessedOutputRangeItem({
      dimensionZ,
      originalOutputRangeItem: elementSettings.position,
    }),
  };
}
