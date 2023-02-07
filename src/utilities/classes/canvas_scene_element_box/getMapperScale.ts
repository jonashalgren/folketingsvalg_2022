import type { C_S_S_E_Box } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  boxSettings: C_S_S_E_Box;
};

export function getMapperScale({ boxSettings }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, outputRange } = boxSettings.motion;

  if (outputRange?.scale?.length > 0) {
    return interpolate(inputRange, outputRange.scale);
  }

  return function () {
    return [1, 1, 1];
  };
}
