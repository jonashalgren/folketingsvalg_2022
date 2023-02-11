import { ExtrudeBufferGeometry, Shape } from "three";

type Props = {
  shape?: Shape;
  bevelOffset?: number;
  curveSegments?: number;
  depth?: number;
  steps?: number;
  bevelThickness?: number;
  bevelSize?: number;
  bevelSegments?: number;
};

export function getExtrudeGeometry({ shape, bevelOffset = -0.03, curveSegments = 1, depth = 0.01, steps = 0, bevelThickness = 1, bevelSegments = 1, bevelSize = 0 }: Props) {
  return new ExtrudeBufferGeometry(shape, {
    bevelOffset,
    curveSegments,
    depth,
    steps,
    bevelSize,
    bevelSegments,
    bevelThickness,
  });
}
