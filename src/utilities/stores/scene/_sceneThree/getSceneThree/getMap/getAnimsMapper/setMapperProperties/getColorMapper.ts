import { interpolate } from "popmotion";

type Props = {
  inputRange: number[];
  outputRange: string[];
};

export function getColorMapper({ inputRange, outputRange }: Props) {
  return interpolate<string>(inputRange, outputRange);
}
