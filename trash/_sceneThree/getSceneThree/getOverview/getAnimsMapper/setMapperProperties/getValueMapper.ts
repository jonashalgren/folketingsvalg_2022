import { interpolate } from "popmotion";

type Props = {
  inputRange: number[];
  outputRange: number[];
};

export function getValueMapper({ inputRange, outputRange }: Props) {
  return interpolate<number>(inputRange, outputRange);
}
