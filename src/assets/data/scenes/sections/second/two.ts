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
    positionEntry: [-170, -250, 350],
    targetEntry: [0, 0, 0],
    targetExit: [-25, -8, -10],
    positionExit: [-25, -8, -5],
  },
  elements: {
    logos: [
      {
        inputRange: [0, 1],
        partyLetter: "Æ",
        positionRange: [
          [0, 18, 0],
          [0, 18, 0],
        ],
        rotation: [0, 0, 0],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        size: 8,
      },
    ],
    numbers: [
      {
        decimals: 1,
        font: threeProperties.font_ane,
        unit: "%",
        rotation: [0, 0, 0],
        textAlign: "center",
        positionRange: {
          inputRange: [0, 1],
          outputRange: [
            [0, -11, 0],
            [0, -11, 0],
          ],
        },
        animRange: {
          inputRange: [0, 0.5, 1],
          colorRange: [partyCollection.Æ.color, partyCollection.Æ.color, partyCollection.Æ.color],
          valueRange: [0, partyCollection.Æ.procent_af_stemmer_2022, partyCollection.Æ.procent_af_stemmer_2022],
          sizeRange: [30, 30, 30],
        },
      },
    ],
  },
};
