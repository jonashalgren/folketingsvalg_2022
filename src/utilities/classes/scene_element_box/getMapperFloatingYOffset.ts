import { interpolate, cubicBezier } from "popmotion";
type Props = {
  size: number;
};

export function getMapperFloatingYOffset({ size }: Props) {
  const easeIn = cubicBezier(0.11, 0, 0.5, 0);
  const easeOut = cubicBezier(0.5, 1, 0.89, 1);
  const step = 0.8 + size / 15;

  return interpolate([0, 0.5, 1], [-step, step, -step], { ease: [easeOut, easeIn] });
}
