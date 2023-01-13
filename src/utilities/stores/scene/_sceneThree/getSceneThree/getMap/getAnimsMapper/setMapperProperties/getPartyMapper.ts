import { interpolate } from "popmotion";
import type { S_Map_Properties_Area_Party } from "@models";

type Props = {
  inputRange: number[];
  outputRange: S_Map_Properties_Area_Party[];
};

export function getPartyMapper({ inputRange, outputRange }: Props) {
  return interpolate<S_Map_Properties_Area_Party>(inputRange, outputRange);
}
