import { interpolate } from "popmotion";
import { getOutputZ } from "@helpers";

type Props = {
  inputRange: number[];
  outputRange: number[];
  outputOffsetZ: number;
};

export function getValueMapper({ inputRange, outputRange, outputOffsetZ }: Props) {
  return interpolate<number>(
    inputRange,
    outputRange.map((item) => getOutputZ({ z: item, outputOffsetZ }))
  );
}
