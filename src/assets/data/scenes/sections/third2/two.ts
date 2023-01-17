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
    positionEntry: [-50, -100, 300],
    targetEntry: [0, 0, 0],
    targetExit: [5, -5, -5],
    positionExit: [5, -5, -3],
  },
  elements: {
    logos: [
      {
        inputRange: [0, 1],
        partyLetter: "C",
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
        decimals: 0,
        font: threeProperties.font_ane,
        unit: "",
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
          colorRange: [partyCollection.C.color, partyCollection.C.color, partyCollection.C.color],
          valueRange: [
            partyCollection.C.mandater_2019,
            partyCollection.C.mandater_2022,
            partyCollection.C.mandater_2022,
          ],
          sizeRange: [30, 30, 30],
        },
      },
    ],
    texts: [
      {
        color: partyCollection.C.color,
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
