import type { S } from "@models";

export const one: S = {
  hasLogoIntro: true,
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
    positionEntry: [-80, -100, 260],
    targetEntry: [0, 0, 0],
    targetExit: [0, 27, -10],
    positionExit: [0, 27, -5],
  },
  elements: {
    boxes: [
      {
        partyLetter: "B",
        texture: "leader",
        inputRange: [0, 1],
        positionRange: [
          [0, -4, 0],
          [0, -4, 0],
        ],
        rotation: [0, 0, 0],
        size: 50,
      },
      {
        partyLetter: "B",
        texture: "logo",
        inputRange: [0, 1],
        positionRange: [
          [0, 29, 0],
          [0, 29, 0],
        ],
        rotation: [0, 0, 0],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        size: 8,
      },
    ],
  },
};
