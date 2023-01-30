import type { S_E_Text_Data } from "@models";
import { getProcessedOutputRangeItem } from "@helpers";

type Props = {
  dimensionZ: number;
  texts?: S_E_Text_Data[];
};

export function getElementTexts({ texts, dimensionZ }: Props): S_E_Text_Data[] {
  return (texts ?? []).map((item) => {
    return {
      ...item,
      type: "text",
      position: getProcessedOutputRangeItem({
        dimensionZ,
        originalOutputRange: item.position,
      }),
    };
  });
}
