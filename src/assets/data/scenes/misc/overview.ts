import type { S } from "@models";

export const overview: S = {
  hasLogoIntro: true,
  additionalScroll: [[0, 0.5, 0]],
  camera: {
    targetMain: {
      inputRange: [0, 1],
      outputRange: [
        [7, -4, 10],
        [7, -4, 10],
      ],
    },
    positionMain: {
      inputRange: [0, 1],
      outputRange: [
        [7, -10, 120],
        [7, -10, 120],
      ],
    },
    positionEntry: [0, -250, 350],
    targetEntry: [0, 0, 0],
    positionExit: [7, 4, -5],
    targetExit: [7, 4, -10],
  },
  elements: {
    barChart: {
      animConfigs: [
        { variant: "blank", inputRange: [0, 0.01] },
        { variant: "normal", year: "2022", inputRange: [0.2, 1] },
      ],
    },
  },
};
