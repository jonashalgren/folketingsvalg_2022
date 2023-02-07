import type { C_S_Settings } from "@models";
import { partyCollection, fonts, mesh_default_settings } from "@assets";

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

export const four: C_S_Settings = {
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
    positionEntry: [50, -400, 50],
    targetEntry: [0, -5, 15],
    targetExit: [0, -38, -5],
    positionExit: [0, -38, -10],
  },
  elements: [
    {
      type: "box",
      partyLetter: "M",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: 0 }),
          scale: [
            [1, 0, 1],
            [1, -partyCollection.M.procent_af_stemmer_2022 / 6, 1],
          ],
        },
      },
    },
    {
      type: "box",
      partyLetter: "M",
      texture: "logo",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: [0, 1],
        outputRange: {
          position: [
            [0, -24.8, 0],
            [0, -24.8, 0],
          ],
          scale: [
            [1, 1, 1],
            [1, 1, 1],
          ],
        },
      },
    },
    {
      type: "box",
      partyLetter: "V",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: -20 }),
          scale: [
            [1, -partyCollection.V.procent_af_stemmer_2019 / 6, 1],
            [1, -partyCollection.V.procent_af_stemmer_2022 / 6, 1],
          ],
        },
      },
    },
    {
      type: "box",
      partyLetter: "V",
      texture: "logo",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: [0, 1],
        outputRange: {
          position: [
            [-20, -24.8, 0],
            [-20, -24.8, 0],
          ],
          scale: [
            [1, 1, 1],
            [1, 1, 1],
          ],
        },
      },
    },
    {
      type: "box",
      partyLetter: "Æ",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: 20 }),
          scale: [
            [1, 0, 1],
            [1, -partyCollection.Æ.procent_af_stemmer_2022 / 6, 1],
          ],
        },
      },
    },
    {
      type: "box",
      partyLetter: "Æ",
      texture: "logo",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: [0, 1],
        outputRange: {
          position: [
            [20, -24.8, 0],
            [20, -24.8, 0],
          ],
          scale: [
            [1, 1, 1],
            [1, 1, 1],
          ],
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
          outputRange: [
            [0, -15, 0],
            [0, -15 + partyCollection.M.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_default_settings.color_dark, mesh_default_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.M.procent_af_stemmer_2022],
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
          outputRange: [
            [-20, -15 + partyCollection.V.procent_af_stemmer_2019 * 2.4, 0],
            [-20, -15 + partyCollection.V.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_default_settings.color_dark, mesh_default_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [partyCollection.V.procent_af_stemmer_2019, partyCollection.V.procent_af_stemmer_2022],
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
          outputRange: [
            [20, -15, 0],
            [20, -15 + partyCollection.Æ.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_default_settings.color_dark, mesh_default_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.Æ.procent_af_stemmer_2022],
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
      unit: "",
      decimals: 0,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: [
            [0, -42, 0],
            [0, -42, 0],
          ],
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_default_settings.color_dark, mesh_default_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [2019, 2019],
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
      unit: "",
      decimals: 0,
      textAlign: "center",
      rotation: getNumberRotation(),
      motion: {
        position: {
          inputRange: getInputRange(),
          outputRange: [
            [0, -42, 0],
            [0, -42, 0],
          ],
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [mesh_default_settings.color_dark, mesh_default_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [2022, 2022],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
  ],
};
