import type { S_Settings } from "@models";
import { partyCollection, fonts } from "@assets";

export const two: S_Settings = {
  extraTextMargin: [{ index: 0, top: 0.5, bottom: 0 }],
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
  elements: [
    {
      type: "box",
      partyLetter: "Æ",
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
    {
      type: "number",
      decimals: 1,
      font: fonts.ane,
      unit: "%",
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
          inputRange: [0, 0.5, 1],
          outputRange: [partyCollection.Æ.color, partyCollection.Æ.color, partyCollection.Æ.color],
        },
        value: {
          inputRange: [0, 0.5, 1],
          outputRange: [0, partyCollection.Æ.procent_af_stemmer_2022, partyCollection.Æ.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.5, 1],
          outputRange: [30, 30, 30],
        },
      },
    },
  ],
};
