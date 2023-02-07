import { interpolate, cubicBezier } from "popmotion";
import type { C_S_S_E_Box } from "@models";

type Props = {
  boxSettings: C_S_S_E_Box;
};

export function getMapperFloatingYOffset({ boxSettings }: Props) {
  const easeIn = cubicBezier(0.11, 0, 0.5, 0);
  const easeOut = cubicBezier(0.5, 1, 0.89, 1);
  const step = 0.8 + boxSettings.size / 15;
  if (boxSettings.isFloating) {
    return interpolate([0, 0.5, 1], [-step, step, -step], { ease: [easeOut, easeIn] });
  }
  return function () {
    return 0;
  };
}
