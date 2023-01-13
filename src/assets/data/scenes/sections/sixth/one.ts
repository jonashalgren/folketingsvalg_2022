import type { S } from "@models";

export const one: S = {
  hasLogoIntro: true,
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
    entryPosition: [-80, -350, 60],
    entryTarget: [0, 0, 0],
    exitTarget: [0, 27, -10],
    exitPosition: [0, 27, -5],
  },
  elements: {
    logo: [
      {
        inputRange: [0, 1],
        partyLetter: "A",
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
    image: [
      {
        partyLetter: "A",
        inputRange: [0, 1],
        positionRange: [
          [0, -4, 0],
          [0, -4, 0],
        ],
        rotation: [0, 0, 0],
        size: 50,
      },
    ],
  },
};
