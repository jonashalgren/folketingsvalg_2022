import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";

export const two: S = {
  additionalScroll: [[0, 0.5, 0]],
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
    positionEntry: [0, -100, 300],
    targetEntry: [0, 0, 10],
    targetExit: [5, 2, -4],
    positionExit: [5, 2, -2],
  },
  elements: {
    boxes: [
      {
        partyLetter: "I",
        texture: "logo",
        rotation: [0, 0, 0],
        size: 8,
        motion: {
          inputRange: [0, 1],
          outputRange: {
            position: [
              [0, 18, 0],
              [0, 18, 0],
            ],
            scale: [
              [1, 1, 1],
              [1, 1, 1],
            ],
          },
        },
      },
    ],
    numbers: [
      {
        decimals: 0,
        font: threeProperties.font_ane,
        unit: "",
        rotation: [0, 0, 0],
        textAlign: "center",
        motion: {
          position: {
            inputRange: [0, 1],
            outputRange: [
              [0, -11, 0],
              [0, -11, 0],
            ],
          },
          color: {
            inputRange: [0, 0.32, 1],
            outputRange: [partyCollection.I.color, partyCollection.I.color, partyCollection.I.color],
          },
          value: {
            inputRange: [0, 0.32, 1],
            outputRange: [
              partyCollection.I.mandater_2019,
              partyCollection.I.mandater_2022,
              partyCollection.I.mandater_2022,
            ],
          },
          size: {
            inputRange: [0, 0.32, 1],
            outputRange: [30, 30, 30],
          },
        },
      },
    ],
    texts: [
      {
        color: partyCollection.I.color,
        font: threeProperties.font_ane,
        fontSize: 10,
        maxWidth: 400,
        position: [0, -26, 0],
        rotation: [0, 0, 0],
        text: "Mandater",
        textAlign: "center",
      },
    ],
  },
};
