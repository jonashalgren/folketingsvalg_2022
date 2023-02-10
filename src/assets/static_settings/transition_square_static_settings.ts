import { Color, type Vector3Tuple } from "three";

export const transition_square_static_settings: { color: Color; positionOutputRange: [Vector3Tuple, Vector3Tuple]; rotationOutputRange: [Vector3Tuple, Vector3Tuple] }[] = [
  {
    color: new Color("#e6ce51"),
    positionOutputRange: [
      [2, 7, 5],
      [-260, 250, 20],
    ],
    rotationOutputRange: [
      [0, 0, 0],
      [0.2, 0.2, -0.5],
    ],
  },
  {
    color: new Color("#ba51b7"),
    positionOutputRange: [
      [-10, -5, 12],
      [240, 250, 30],
    ],
    rotationOutputRange: [
      [0, 0, 0],
      [0.4, -0.2, 0.5],
    ],
  },
  {
    color: new Color("#26d6d2"),
    positionOutputRange: [
      [10, -13, 19],
      [-50, -250, 40],
    ],
    rotationOutputRange: [
      [0, 0, 0],
      [-0.2, 0.2, -0.5],
    ],
  },
];
