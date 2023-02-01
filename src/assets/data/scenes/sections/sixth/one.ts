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
    positionEntry: [-80, -350, 60],
    targetEntry: [0, 0, 0],
    targetExit: [0, 27, -10],
    positionExit: [0, 27, -5],
  },
  elements: [
    {
      type: "box",
      partyLetter: "A",
      texture: "leader",
      rotation: [0, 0, 0],
      size: 50,
      motion: {
        inputRange: [0, 1],
        outputRange: {
          position: [
            [0, -4, 0],
            [0, -4, 0],
          ],
        },
      },
    },
    {
      type: "box",
      partyLetter: "A",
      texture: "logo",
      rotation: [0, 0, 0],
      size: 8,
      motion: {
        inputRange: [0, 1],
        outputRange: {
          position: [
            [0, 29, 0],
            [0, 29, 0],
          ],
          scale: [
            [1, 1, 1],
            [1, 1, 1],
          ],
        },
      },
    },
  ],
};
