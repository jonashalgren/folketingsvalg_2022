import type { C_Content_Settings } from "@models";
import { partyCollection, fonts, mesh_static_settings } from "@assets";

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

export const two: C_Content_Settings = {
  extraTextMargin: [{ index: 0, top: 0.5, bottom: 0 }],
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
  elements: [
    {
      type: "box",
      partyLetter: "O",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: -43 }),
          scale: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2007 }),
        },
      },
    },
    {
      type: "box",
      partyLetter: "O",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: -21.5 }),
          scale: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2011 }),
        },
      },
    },
    {
      type: "box",
      partyLetter: "O",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: 0 }),
          scale: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2015 }),
        },
      },
    },
    {
      type: "box",

      partyLetter: "O",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: 21.5 }),
          scale: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2019 }),
        },
      },
    },
    {
      type: "box",

      partyLetter: "O",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: 43 }),
          scale: getScaleRange({ num: partyCollection.O.procent_af_stemmer_2022 }),
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      unit: "%",
      decimals: 1,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: -43,
            y: partyCollection.O.procent_af_stemmer_2007 * 3.5,
          }),
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_static_settings.color_dark, mesh_static_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.O.procent_af_stemmer_2007],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      unit: "%",
      decimals: 1,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: -21.5,
            y: partyCollection.O.procent_af_stemmer_2011 * 3.5,
          }),
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_static_settings.color_dark, mesh_static_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.O.procent_af_stemmer_2011],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      unit: "%",
      decimals: 1,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: 0,
            y: partyCollection.O.procent_af_stemmer_2015 * 3.5,
          }),
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_static_settings.color_dark, mesh_static_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.O.procent_af_stemmer_2015],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      unit: "%",
      decimals: 1,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: 21.5,
            y: partyCollection.O.procent_af_stemmer_2019 * 3.5,
          }),
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_static_settings.color_dark, mesh_static_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.O.procent_af_stemmer_2019],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      unit: "%",
      decimals: 1,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: getNumberPositionRange({
            x: 43,
            y: partyCollection.O.procent_af_stemmer_2022 * 3.5,
          }),
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_static_settings.color_dark, mesh_static_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.O.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
    {
      type: "text",
      font: fonts.ane,
      text: "2007",
      fontSize: 5,
      maxWidth: 100,
      textAlign: "center",
      rotation: [0, 0, 0],
      position: [-43, -40, 0],
      color: mesh_static_settings.color_dark,
    },
    {
      type: "text",
      font: fonts.ane,
      text: "2011",
      fontSize: 5,
      maxWidth: 100,
      textAlign: "center",
      rotation: [0, 0, 0],
      position: [-21.5, -40, 0],
      color: mesh_static_settings.color_dark,
    },
    {
      type: "text",
      font: fonts.ane,
      text: "2015",
      fontSize: 5,
      maxWidth: 100,
      textAlign: "center",
      rotation: [0, 0, 0],
      position: [0, -40, 0],
      color: mesh_static_settings.color_dark,
    },
    {
      type: "text",
      font: fonts.ane,
      text: "2019",
      fontSize: 5,
      maxWidth: 100,
      textAlign: "center",
      rotation: [0, 0, 0],
      position: [21.5, -40, 0],
      color: mesh_static_settings.color_dark,
    },
    {
      type: "text",
      font: fonts.ane,
      text: "2022",
      fontSize: 5,
      maxWidth: 100,
      textAlign: "center",
      rotation: [0, 0, 0],
      position: [43, -40, 0],
      color: mesh_static_settings.color_dark,
    },
  ],
};
