import type { S } from "@models";

export const overview: S = {
  hasLogoIntro: true,
  additionalScroll: [[0, 0.5, 0]],
  camera: {
    target: {
      inputRange: [0, 1],
      outputRange: [
        [7, -4, 10],
        [7, -4, 10],
      ],
    },
    position: {
      inputRange: [0, 1],
      outputRange: [
        [7, -10, 120],
        [7, -10, 120],
      ],
    },
    entryPosition: [0, -250, 350],
    exitPosition: [7, 4, -5],
    exitTarget: [7, 4, -10],
  },
  elements: {
    overview: {
      animConfigs: [
        { variant: "blank", inputRange: [0, 0.01] },
        { variant: "normal", year: "2022", inputRange: [0.2, 1] },
      ],
    },
  },
};
