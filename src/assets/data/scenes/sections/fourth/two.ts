import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";

const size = 14;

function getScaleRange({ num }) {
  return [
    [1, 0, 0.01],
    [1, -num / 4, 0.01],
  ] as [number, number, number][];
}

function getInputRange() {
  return [0, 0.36];
}

function getNumberPositionRange({ x, y }) {
  return [
    [x, -30, 0],
    [x, -30 + y, 0],
  ] as [number, number, number][];
}

function getLogoPositionRange({ x }) {
  return [
    [x, -40, 0],
    [x, -40, 0],
  ] as [number, number, number][];
}

function getNumberRotation() {
  return [0, 0, 0] as [number, number, number];
}

export const two: S = {
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
    positionEntry: [-20, -150, 350],
    targetEntry: [0, -5, 15],
    positionExit: [0, 50, -3],
    targetExit: [0, 50, -5],
  },
  elements: {
    logos: [
      {
        partyLetter: "O",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: -43 }),
        scaleRange: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2007 }),
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "O",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: -21.5 }),
        scaleRange: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2011 }),
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "O",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: 0 }),
        scaleRange: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2015 }),
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "O",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: 21.5 }),
        scaleRange: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2019 }),
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
      },
      {
        partyLetter: "O",
        inputRange: getInputRange(),
        positionRange: getLogoPositionRange({ x: 43 }),
        scaleRange: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2022 }),
        rotation: [0, 0, 0],
        size,
        isLetterHidden: true,
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
          valueRange: [0, partyCollection.O.procent_af_stemmer_2007],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: -43,
            y: partyCollection.O.procent_af_stemmer_2007 * 3.5,
          }),
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
          valueRange: [0, partyCollection.O.procent_af_stemmer_2011],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: -21.5,
            y: partyCollection.O.procent_af_stemmer_2011 * 3.5,
          }),
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
          valueRange: [0, partyCollection.O.procent_af_stemmer_2015],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: 0,
            y: partyCollection.O.procent_af_stemmer_2015 * 3.5,
          }),
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
          valueRange: [0, partyCollection.O.procent_af_stemmer_2019],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: 21.5,
            y: partyCollection.O.procent_af_stemmer_2019 * 3.5,
          }),
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
          valueRange: [0, partyCollection.O.procent_af_stemmer_2022],
          sizeRange: [0, 5],
        },
        positionRange: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: 43,
            y: partyCollection.O.procent_af_stemmer_2022 * 3.5,
          }),
        },
      },
    ],
    texts: [
      {
        font: threeProperties.font_ane,
        text: "2007",
        fontSize: 5,
        maxWidth: 100,
        textAlign: "center",
        rotation: [0, 0, 0],
        position: [-43, -40, 0],
        color: threeProperties.color_dark,
      },
      {
        font: threeProperties.font_ane,
        text: "2011",
        fontSize: 5,
        maxWidth: 100,
        textAlign: "center",
        rotation: [0, 0, 0],
        position: [-21.5, -40, 0],
        color: threeProperties.color_dark,
      },
      {
        font: threeProperties.font_ane,
        text: "2015",
        fontSize: 5,
        maxWidth: 100,
        textAlign: "center",
        rotation: [0, 0, 0],
        position: [0, -40, 0],
        color: threeProperties.color_dark,
      },
      {
        font: threeProperties.font_ane,
        text: "2019",
        fontSize: 5,
        maxWidth: 100,
        textAlign: "center",
        rotation: [0, 0, 0],
        position: [21.5, -40, 0],
        color: threeProperties.color_dark,
      },
      {
        font: threeProperties.font_ane,
        text: "2022",
        fontSize: 5,
        maxWidth: 100,
        textAlign: "center",
        rotation: [0, 0, 0],
        position: [43, -40, 0],
        color: threeProperties.color_dark,
      },
    ],
  },
};