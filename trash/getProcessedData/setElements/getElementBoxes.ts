import type { S_E_Box_Data } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  dimensionZ: number;
  boxes?: S_E_Box_Data[];
};

export function getElementBoxes({ boxes, dimensionZ }: Props): S_E_Box_Data[] {
  return (boxes ?? []).map((item) => {
    return {
      ...item,
      type: "box",
      positionRange: getProcessedOutputRangeList({
        dimensionZ,
        originalOutputRange: item.positionRange ?? [],
      }),
      scaleRange: getProcessedOutputRangeList({
        dimensionZ,
        originalOutputRange: item.scaleRange ?? [],
      }),
    };
  });
}
