import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";

const size = 14;

function getInputRange() {
  return [0, 0.43];
}

function getLogoPositionRange({ x }) {
  return [
    [x, -25, 0],
    [x, -25, 0],
  ] as [number, number, number][];
}

function getNumberRotation() {
  return [0, 0, 0] as [number, number, number];
}

export const four: S = {
  additionalScroll: [[0, 0.5, 0]],
  camera: {
    targetMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, -5, 15],
        [0, -5, 15],
      ],
    },
    positionMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, -10, 110],
        [0, -10, 110],
      ],
    },
    positionEntry: [50, -400, 50],
    targetEntry: [0, -5, 15],
    targetExit: [0, -38, -5],
    positionExit: [0, -38, -10],
  },
  elements: {
    logos: [
      {
        partyLetter: "M",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: 0 }),
        scaleRange: [
          [1, 0, 0.01],
          [1, -partyCollection.M.procent_af_stemmer_2022 / 6, 0.01],
        ],
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "M",
        inputRange: [0, 1],
        positionRange: [
          [0, -24.8, 0.1],
          [0, -24.8, 0.1],
        ],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        rotation: [0, 0, 0],
        size,
      },
      {
        partyLetter: "V",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: -20 }),
        scaleRange: [
          [1, -partyCollection.V.procent_af_stemmer_2019 / 6, 0.01],
          [1, -partyCollection.V.procent_af_stemmer_2022 / 6, 0.01],
        ],
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "V",
        inputRange: [0, 1],
        positionRange: [
          [-20, -24.8, 0.1],
          [-20, -24.8, 0.1],
        ],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        rotation: [0, 0, 0],
        size,
      },
      {
        partyLetter: "Æ",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: 20 }),
        scaleRange: [
          [1, 0, 0.01],
          [1, -partyCollection.Æ.procent_af_stemmer_2022 / 6, 0.01],
        ],
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "Æ",
        inputRange: [0, 1],
        positionRange: [
          [20, -24.8, 0.1],
          [20, -24.8, 0.1],
        ],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        rotation: [0, 0, 0],
        size,
      },
    ],
    numbers: [
      {
        font: threeProperties.font_ane,
        unit: "%",
        decimals: 1,
        textAlign: "center",
        rotation: getNumberRotation(),
        animRange: {
          inputRange: [0, 0.36],
          colorRange: [threeProperties.color_dark, threeProperties.color_dark],
          valueRange: [0, partyCollection.M.procent_af_stemmer_2022],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: [
            [0, -15, 0],
            [0, -15 + partyCollection.M.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
      },
      {
        font: threeProperties.font_ane,
        unit: "%",
        decimals: 1,
        textAlign: "center",
        rotation: getNumberRotation(),
        animRange: {
          inputRange: [0, 0.36],
          colorRange: [threeProperties.color_dark, threeProperties.color_dark],
          valueRange: [partyCollection.V.procent_af_stemmer_2019, partyCollection.V.procent_af_stemmer_2022],
          sizeRange: [5, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: [
            [-20, -15 + partyCollection.V.procent_af_stemmer_2019 * 2.4, 0],
            [-20, -15 + partyCollection.V.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
      },
      {
        font: threeProperties.font_ane,
        unit: "%",
        decimals: 1,
        textAlign: "center",
        rotation: getNumberRotation(),
        animRange: {
          inputRange: [0, 0.36],
          colorRange: [threeProperties.color_dark, threeProperties.color_dark],
          valueRange: [0, partyCollection.Æ.procent_af_stemmer_2022],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: [
            [20, -15, 0],
            [20, -15 + partyCollection.Æ.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
      },

      {
        font: threeProperties.font_ane,
        unit: "",
        decimals: 0,
        textAlign: "center",
        rotation: getNumberRotation(),
        animRange: {
          inputRange: [0, 0.36],
          colorRange: [threeProperties.color_dark, threeProperties.color_dark],
          valueRange: [2019, 2019],
          sizeRange: [5, 0],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: [
            [0, -42, 0],
            [0, -42, 0],
          ],
        },
      },

      {
        font: threeProperties.font_ane,
        unit: "",
        decimals: 0,
        textAlign: "center",
        rotation: getNumberRotation(),
        animRange: {
          inputRange: [0, 0.36],
          colorRange: [threeProperties.color_dark, threeProperties.color_dark],
          valueRange: [2022, 2022],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: [
            [0, -42, 0],
            [0, -42, 0],
          ],
        },
      },
    ],
  },
};
