import type { C_Scene_Settings } from "@models";
import { partyCollection, fonts, element_mesh_settings } from "@assets";
import { C_S_Element_Type } from "@models";

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

export const four: C_Scene_Settings = {
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
      type: C_S_Element_Type.BOX,
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
      type: C_S_Element_Type.BOX,
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
      type: C_S_Element_Type.BOX,
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
      type: C_S_Element_Type.BOX,
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
      type: C_S_Element_Type.BOX,
      partyLetter: "??",
      rotation: [0, 0, 0],
      size,
      motion: {
        inputRange: getInputRange(),
        outputRange: {
          position: getLogoPositionRange({ x: 20 }),
          scale: [
            [1, 0, 1],
            [1, -partyCollection.??.procent_af_stemmer_2022 / 6, 1],
          ],
        },
      },
    },
    {
      type: C_S_Element_Type.BOX,
      partyLetter: "??",
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
      type: C_S_Element_Type.NUMBER,
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
          outputRange: [element_mesh_settings.color_dark, element_mesh_settings.color_dark],
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
      type: C_S_Element_Type.NUMBER,
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
          outputRange: [element_mesh_settings.color_dark, element_mesh_settings.color_dark],
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
      type: C_S_Element_Type.NUMBER,
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
            [20, -15 + partyCollection.??.procent_af_stemmer_2022 * 2.4, 0],
          ],
        },
        color: {
          inputRange: [0, 0.36],
          outputRange: [element_mesh_settings.color_dark, element_mesh_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [0, partyCollection.??.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [0, 5],
        },
      },
    },
    {
      type: C_S_Element_Type.NUMBER,
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
          outputRange: [element_mesh_settings.color_dark, element_mesh_settings.color_dark],
        },
        value: {
          inputRange: [0, 0.36],
          outputRange: [2019, 2019],
        },
        size: {
          inputRange: [0, 0.36],
          outputRange: [5, 0],
        },
      },
    },
    {
      type: C_S_Element_Type.NUMBER,
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
          outputRange: [element_mesh_settings.color_dark, element_mesh_settings.color_dark],
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
