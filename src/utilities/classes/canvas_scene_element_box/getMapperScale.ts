import type { C_S_S_Element_Box } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  elementSettings: C_S_S_Element_Box;
};

export function getMapperScale({ elementSettings }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, outputRange } = elementSettings.motion;

  if (outputRange?.scale?.length > 0) {
    return interpolate(inputRange, outputRange.scale);
  }

  return function () {
    return [1, 1, 1];
  };
}
