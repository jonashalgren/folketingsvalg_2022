import type { C_C_S_Element_Box } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  boxSettings: C_C_S_Element_Box;
};

export function getMapperPosition({ boxSettings }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, outputRange } = boxSettings.motion;

  if (outputRange?.position?.length > 0) {
    return interpolate(inputRange, outputRange.position);
  }

  return function () {
    return [0, 0, 0];
  };
}
