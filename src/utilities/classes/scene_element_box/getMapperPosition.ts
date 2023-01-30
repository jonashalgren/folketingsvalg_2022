import type { S_E_Box_Data } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  data: S_E_Box_Data;
};

export function getMapperPosition({ data }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, outputRange } = data.motion;

  if (outputRange?.position?.length > 0) {
    return interpolate(inputRange, outputRange.position);
  }

  return function () {
    return [0, 0, 0];
  };
}
