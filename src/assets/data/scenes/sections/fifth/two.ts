import type { S } from "@models";
import { partyCollection } from "@assets";

export const two: S = {
  camera: {
    targetMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
      ],
    },
    positionMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, -30, 100],
        [0, -30, 100],
      ],
    },
    positionEntry: [0, -200, 350],
    targetEntry: [0, 0, 0],
    targetExit: [0, 0, -20],
    positionExit: [0, 0, -10],
  },
  elements: {
    logos: [
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
    figures: [
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
