import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";

const newScaleRange = [
  [1, 1, 200],
  [1, 1, 200],
  [1, 1, 200],
  [1, 1, 200],
  [1, 1, 200],
  [1, 1, 200],
] as [number, number, number][];

function getSize(num: number) {
  return num * 1.5;
}

const partyInputRange = [0, 0.48, 0.63, 0.76, 0.9, 1];

export const mandates: S = {
  hasLogoIntro: true,
  isPartyFloating: true,
  bBox: { x: 100, y: 180 },
  additionalScroll: [
    [0, 0.5, 0.5],
    [1, 0, 0.5],
    [2, 0, 0.5],
    [3, 0, 0],
  ],
  camera: {
    target: {
      inputRange: [0, 0.2, 0.35, 0.49, 0.63, 1],
      outputRange: [
        [0, -2, 10],
        [0, -2, 10],
        [-15, 65, 10],
        [-15, 65, 10],
        [0, -2, 10],
        [0, -2, 10],
      ],
    },
    position: {
      inputRange: [0, 0.2, 0.35, 0.49, 0.63, 1],
      outputRange: [
        [-10, -80, 100],
        [-10, -80, 100],
        [-15, 25, 70],
        [-15, 25, 70],
        [-10, -80, 100],
        [-10, -80, 100],
      ],
    },
    entryPosition: [0, -300, 160],
    entryTarget: [0, 0, 0],
    exitPosition: [-10, 20, -5],
    exitTarget: [-10, 20, -10],
  },

  elements: {
    number: [
      {
        font: threeProperties.font_ane,
        decimals: 0,
        positionRange: {
          inputRange: [0, 1],
          outputRange: [
            [35, 80, 0],
            [35, 80, 0],
          ],
        },
        rotation: [0, 0, 0],
        textAlign: "center",
        unit: "",
        animRange: {
          inputRange: [0, 0.07, 0.2, 0.35],
          colorRange: [
            partyCollection.A.color,
            partyCollection.A.color,
            partyCollection.A.color,
            partyCollection.A.color,
          ],
          valueRange: [0, 87, 87, 87],
          sizeRange: [0, 20, 20, 0],
        },
      },
      {
        font: threeProperties.font_ane,
        decimals: 0,
        positionRange: {
          inputRange: [0, 1],
          outputRange: [
            [-27, -55, 0],
            [-27, -55, 0],
          ],
        },
        rotation: [0, 0, 0],
        textAlign: "center",
        unit: "",
        animRange: {
          inputRange: [0, 0.07, 0.2, 0.35],
          colorRange: [
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
          ],
          valueRange: [0, 72, 72, 72],
          sizeRange: [0, 20, 20, 0],
        },
      },
      {
        font: threeProperties.font_ane,
        decimals: 0,
        positionRange: {
          inputRange: [0, 1],
          outputRange: [
            [17, 4, 0],
            [17, 4, 0],
          ],
        },
        rotation: [0, 0, 0],
        textAlign: "center",
        unit: "",
        animRange: {
          inputRange: [0, 0.07, 0.2, 0.35],
          colorRange: [
            partyCollection.M.color,
            partyCollection.M.color,
            partyCollection.M.color,
            partyCollection.M.color,
          ],
          valueRange: [0, 16, 16, 16],
          sizeRange: [0, 10, 10, 0],
        },
      },
    ],
    logo: [
      {
        partyLetter: "A",
        inputRange: partyInputRange,
        positionRange: [
          [-25, 85, 0],
          [-25, 85, 0],
          [-28, 35, 0],
          [-29, 35, 0],
          [10, -50, 0],
          [10, -50, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.A.procent_af_stemmer_2022),
      },
      {
        partyLetter: "Ø",
        inputRange: partyInputRange,
        positionRange: [
          [-30, 53, 0],
          [-30, 53, 0],
          [-28, 3, 0],
          [-28, 3, 0],
          [40, 50, 0],
          [40, 50, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.Ø.procent_af_stemmer_2022),
      },
      {
        partyLetter: "F",
        inputRange: partyInputRange,
        positionRange: [
          [6, 90, 0],
          [6, 90, 0],
          [6, 40, 0],
          [6, 40, 0],
          [-45, 10, 0],
          [-45, 10, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.F.procent_af_stemmer_2022),
      },
      {
        partyLetter: "Å",
        inputRange: partyInputRange,
        positionRange: [
          [15, 65, 0],
          [15, 65, 0],
          [35, 35, 0],
          [35, 35, 0],
          [20, 70, 0],
          [20, 70, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.Å.procent_af_stemmer_2022),
      },
      {
        partyLetter: "B",
        inputRange: partyInputRange,
        positionRange: [
          [5, 74, 0],
          [5, 74, 0],
          [5, 24, 0],
          [5, 24, 0],
          [-30, 62, 0],
          [-30, 62, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.B.procent_af_stemmer_2022),
      },
      {
        partyLetter: "M",
        inputRange: partyInputRange,
        positionRange: [
          [0, 5, 0],
          [0, 5, 0],
          [0, 5, 0],
          [0, 5, 0],
          [0, 45, 0],
          [0, 45, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.M.procent_af_stemmer_2022),
      },
      {
        partyLetter: "V",
        inputRange: partyInputRange,
        positionRange: [
          [25, -62, 0],
          [25, -62, 0],
          [25, -12, 0],
          [25, -12, 0],
          [30, 22, 0],
          [30, 22, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.V.procent_af_stemmer_2022),
      },
      {
        partyLetter: "C",
        inputRange: partyInputRange,
        positionRange: [
          [5, -60, 0],
          [5, -60, 0],
          [5, -14, 0],
          [5, -14, 0],
          [-37, -45, 0],
          [-37, -45, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.C.procent_af_stemmer_2022),
      },
      {
        partyLetter: "O",
        inputRange: partyInputRange,
        positionRange: [
          [25, -28, 0],
          [25, -28, 0],
          [25, 23, 0],
          [25, 23, 0],
          [-25, -10, 0],
          [-25, -10, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.O.procent_af_stemmer_2022),
      },
      {
        partyLetter: "D",
        inputRange: partyInputRange,
        positionRange: [
          [-5, -45, 0],
          [-5, -45, 0],
          [-18, -14, 0],
          [-18, -14, 0],
          [-35, 28, 0],
          [-35, 28, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.D.procent_af_stemmer_2022),
      },
      {
        partyLetter: "I",
        inputRange: partyInputRange,
        positionRange: [
          [10, -40, 0],
          [10, -40, 0],
          [17, 10, 0],
          [17, 10, 0],
          [40, -20, 0],
          [40, -20, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.I.procent_af_stemmer_2022),
      },
      {
        partyLetter: "Æ",
        inputRange: partyInputRange,
        positionRange: [
          [30, -42, 0],
          [30, -42, 0],
          [35, 8, 0],
          [35, 8, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        scaleRange: newScaleRange,
        rotation: [0, 0, 0],
        size: getSize(partyCollection.Æ.procent_af_stemmer_2022),
      },
    ],
  },
};
