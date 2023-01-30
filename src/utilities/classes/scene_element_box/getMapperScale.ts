import type { S_E_Box_Data } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  data: S_E_Box_Data;
};

export function getMapperScale({ data }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, outputRange } = data.motion;

  if (outputRange?.scale?.length > 0) {
    return interpolate(inputRange, outputRange.scale);
  }

  return function () {
    return [1, 1, 1];
  };
}
