import type { C_S_S_Element_Box } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  elementSettings: C_S_S_Element_Box;
};

export function getMapperPosition({ elementSettings }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, outputRange } = elementSettings.motion;

  if (outputRange?.position?.length > 0) {
    return interpolate(inputRange, outputRange.position);
  }

  return function () {
    return [0, 0, 0];
  };
}
