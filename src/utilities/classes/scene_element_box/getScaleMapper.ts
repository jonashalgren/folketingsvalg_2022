import type { S_E_Box_Data } from "@models";
import { interpolate } from "popmotion";
import type { Vector3Tuple } from "three";

type Props = {
  data: S_E_Box_Data;
};

export function getScaleMapper({ data }: Props): (progress: number) => Vector3Tuple {
  const { inputRange, scaleRange } = data;

  if (scaleRange?.length > 0) {
    return interpolate(inputRange, scaleRange);
  }

  return function () {
    return [1, 1, 1];
  };
}
