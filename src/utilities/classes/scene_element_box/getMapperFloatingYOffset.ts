import { interpolate, cubicBezier } from "popmotion";
import type { S_E_Box_Data } from "@models";

type Props = {
  data: S_E_Box_Data;
};

export function getMapperFloatingYOffset({ data }: Props) {
  const easeIn = cubicBezier(0.11, 0, 0.5, 0);
  const easeOut = cubicBezier(0.5, 1, 0.89, 1);
  const step = 0.8 + data.size / 15;
  if (data.isFloating) {
    return interpolate([0, 0.5, 1], [-step, step, -step], { ease: [easeOut, easeIn] });
  }
  return function () {
    return 0;
  };
}
