import type { S } from "@models";
import { partyCollection } from "@assets";

export const two: S = {
  camera: {
    target: {
      inputRange: [0, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
      ],
    },
    position: {
      inputRange: [0, 1],
      outputRange: [
        [0, -30, 100],
        [0, -30, 100],
      ],
    },
    entryPosition: [0, -200, 350],
    entryTarget: [0, 0, 0],
    exitTarget: [0, 0, -20],
    exitPosition: [0, 0, -10],
  },
  elements: {
    logo: [
      {
        inputRange: [0, 1],
        partyLetter: "B",
        positionRange: [
          [0, 30, 0],
          [0, 30, 0],
        ],
        rotation: [0, 0, 0],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        size: 8,
      },
    ],
    part: [
      {
        inputRange: [0, 1],
        amount: 16,
        width: 95,
        color: partyCollection.B.color,
        rows: 2,
        items: [{ disabled: 9, inputRange: [0.012, 1] }],
      },
    ],
  },
};
