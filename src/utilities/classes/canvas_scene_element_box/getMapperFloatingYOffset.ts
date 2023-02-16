import { interpolate, cubicBezier } from "popmotion";
import type { C_S_S_Element_Box } from "@models";

type Props = {
  elementSettings: C_S_S_Element_Box;
};

export function getMapperFloatingYOffset({ elementSettings }: Props) {
  const easeIn = cubicBezier(0.11, 0, 0.5, 0);
  const easeOut = cubicBezier(0.5, 1, 0.89, 1);
  const step = 0.8 + elementSettings.size / 15;
  if (elementSettings.isFloating) {
    return interpolate([0, 0.5, 1], [-step, step, -step], { ease: [easeOut, easeIn] });
  }
  return function () {
    return 0;
  };
}
