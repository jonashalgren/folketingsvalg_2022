import type { S } from "@models";
import { partyCollection } from "@assets";

export const two: S = {
  additionalScroll: [[0, 0.5, 0]],
  camera: {
    target: {
      inputRange: [0, 1],
      outputRange: [
        [-5, 0, 10],
        [-5, 0, 10],
      ],
    },
    position: {
      inputRange: [0, 1],
      outputRange: [
        [-5, -10, 120],
        [-5, -10, 120],
      ],
    },

    entryPosition: [-5, -150, 300],
    entryTarget: [0, 0, 10],
    exitPosition: [0, 20, -2],
    exitTarget: [0, 20, -3],
  },
  elements: {
    line: {
      width: 100,
      topValue: 30,
      bottomValue: 0,
      yAxisBottom: 0,
      lineWidth: 1,
      unit: "%",
      decimals: 0,
      xLabels: ["2007", "2011", "2015", "2019", "2022"],
      animConfigs: [
        {
          color: partyCollection.V.color,
          inputRange: [0, 0.43],
          values: [
            partyCollection.V.procent_af_stemmer_2007,
            partyCollection.V.procent_af_stemmer_2011,
            partyCollection.V.procent_af_stemmer_2015,
            partyCollection.V.procent_af_stemmer_2019,
            partyCollection.V.procent_af_stemmer_2022,
          ],
        },
        {
          color: partyCollection.V.color,
          inputRange: [0, 1],
          offsetX: 3,
          values: [30, 30],
          isHidden: true,
        },
        {
          color: partyCollection.V.color,
          inputRange: [0, 1],
          offsetX: 3,
          values: [0, 0],
          isHidden: true,
        },
      ],
    },
    logo: [
      {
        partyLetter: "V",
        size: 14,
        inputRange: [0, 1],
        positionRange: [
          [0, 64, 0],
          [0, 64, 0],
        ],
        scaleRange: [
          [1, 1, 1],
          [1, 1, 1],
        ],
      },
    ],
  },
};
