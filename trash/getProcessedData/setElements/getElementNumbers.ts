import type { S_E_Number_Data } from "@models";
import { getProcessedOutputRangeList } from "@helpers";

type Props = {
  dimensionZ: number;
  numbers?: S_E_Number_Data[];
};

export function getElementNumbers({ numbers, dimensionZ }: Props): S_E_Number_Data[] {
  return (numbers ?? []).map((item) => {
    return {
      ...item,
      type: "number",
      positionRange: {
        ...item?.positionRange,
        outputRange: getProcessedOutputRangeList({
          dimensionZ,
          originalOutputRange: item?.positionRange.outputRange ?? [],
        }),
      },
    };
  });
}
