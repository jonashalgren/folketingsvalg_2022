import type { S_Settings } from "@models";

export const overview: S_Settings = {
  hasLogoIntro: true,
  extraTextMargin: [{ index: 0, top: 0.5, bottom: 0 }],
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
  elements: [
    // barChart: {
    //   animConfigs: [
    //     { variant: "blank", inputRange: [0, 0.01] },
    //     { variant: "normal", year: "2022", inputRange: [0.2, 1] },
    //   ],
    // },
  ],
};
