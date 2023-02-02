import type { S_Settings } from "@models";
import { partyCollection, fonts } from "@assets";

export const two: S_Settings = {
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
    positionEntry: [-50, -100, 300],
    targetEntry: [0, 0, 0],
    targetExit: [5, -5, -5],
    positionExit: [5, -5, -3],
  },
  elements: [
    {
      type: "box",
      partyLetter: "C",
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
      decimals: 0,
      font: fonts.ane,
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
          inputRange: [0, 0.5, 1],
          outputRange: [partyCollection.C.color, partyCollection.C.color, partyCollection.C.color],
        },
        value: {
          inputRange: [0, 0.5, 1],
          outputRange: [
            partyCollection.C.mandater_2019,
            partyCollection.C.mandater_2022,
            partyCollection.C.mandater_2022,
          ],
        },
        size: {
          inputRange: [0, 0.5, 1],
          outputRange: [30, 30, 30],
        },
      },
    },
    {
      type: "text",
      color: partyCollection.C.color,
      font: fonts.ane,
      fontSize: 10,
      maxWidth: 400,
      position: [0, -26, 0],
      rotation: [0, 0, 0],
      text: "Mandater",
      textAlign: "center",
    },
  ],
};
