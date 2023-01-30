import type { S_E_Box_Data } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  data: S_E_Box_Data;
};

export function getMapperPosition({ data }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, positionRange } = data;

  if (positionRange?.length > 0) {
    return interpolate(inputRange, positionRange);
  }

  return function () {
    return [0, 0, 0];
  };
}
