import type { S } from "@models";
import { partyCollection, fonts } from "@assets";

const newScaleRange = [
  [1, 1, 2],
  [1, 1, 2],
  [1, 1, 2],
  [1, 1, 2],
  [1, 1, 2],
  [1, 1, 2],
] as [number, number, number][];

function getSize(num: number) {
  return num * 1.5;
}

const partyInputRange = [0, 0.48, 0.63, 0.76, 0.9, 1];

export const mandates: S = {
  hasLogoIntro: true,
  boundingBox: { x: 100, y: 180 },
  additionalScroll: [
    [0, 0.5, 0.5],
    [1, 0, 0.5],
    [2, 0, 0.5],
    [3, 0, 0],
  ],
  camera: {
    targetMain: {
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
    positionMain: {
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
    positionEntry: [0, -300, 160],
    targetEntry: [0, 0, 0],
    positionExit: [-10, 20, -5],
    targetExit: [-10, 20, -10],
  },
  elements: [
    {
      type: "number",
      font: fonts.ane,
      decimals: 0,
      rotation: [0, 0, 0],
      textAlign: "center",
      unit: "",
      motion: {
        position: {
          inputRange: [0, 1],
          outputRange: [
            [35, 80, 0],
            [35, 80, 0],
          ],
        },
        color: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [
            partyCollection.A.color,
            partyCollection.A.color,
            partyCollection.A.color,
            partyCollection.A.color,
          ],
        },
        value: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [0, 87, 87, 87],
        },
        size: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [0, 20, 20, 0],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      decimals: 0,
      rotation: [0, 0, 0],
      textAlign: "center",
      unit: "",
      motion: {
        position: {
          inputRange: [0, 1],
          outputRange: [
            [-27, -55, 0],
            [-27, -55, 0],
          ],
        },
        color: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
          ],
        },
        value: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [0, 72, 72, 72],
        },
        size: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [0, 20, 20, 0],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      decimals: 0,
      rotation: [0, 0, 0],
      textAlign: "center",
      unit: "",
      motion: {
        position: {
          inputRange: [0, 1],
          outputRange: [
            [17, 4, 0],
            [17, 4, 0],
          ],
        },
        color: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [
            partyCollection.M.color,
            partyCollection.M.color,
            partyCollection.M.color,
            partyCollection.M.color,
          ],
        },
        value: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [0, 16, 16, 16],
        },
        size: {
          inputRange: [0, 0.07, 0.2, 0.35],
          outputRange: [0, 10, 10, 0],
        },
      },
    },
    {
      type: "box",
      partyLetter: "A",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.A.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [-25, 85, 0],
            [-25, 85, 0],
            [-28, 35, 0],
            [-29, 35, 0],
            [10, -50, 0],
            [10, -50, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "Ø",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.Ø.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [-30, 53, 0],
            [-30, 53, 0],
            [-28, 3, 0],
            [-28, 3, 0],
            [40, 50, 0],
            [40, 50, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "F",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.F.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [6, 90, 0],
            [6, 90, 0],
            [6, 40, 0],
            [6, 40, 0],
            [-45, 10, 0],
            [-45, 10, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "Å",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.Å.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [15, 65, 0],
            [15, 65, 0],
            [35, 35, 0],
            [35, 35, 0],
            [20, 70, 0],
            [20, 70, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "B",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.B.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [5, 74, 0],
            [5, 74, 0],
            [5, 24, 0],
            [5, 24, 0],
            [-30, 62, 0],
            [-30, 62, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "M",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.M.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [0, 5, 0],
            [0, 5, 0],
            [0, 5, 0],
            [0, 5, 0],
            [0, 45, 0],
            [0, 45, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "V",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.V.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [25, -62, 0],
            [25, -62, 0],
            [25, -12, 0],
            [25, -12, 0],
            [30, 22, 0],
            [30, 22, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "C",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.C.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [5, -60, 0],
            [5, -60, 0],
            [5, -14, 0],
            [5, -14, 0],
            [-37, -45, 0],
            [-37, -45, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "O",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.O.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [25, -28, 0],
            [25, -28, 0],
            [25, 23, 0],
            [25, 23, 0],
            [-25, -10, 0],
            [-25, -10, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "D",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.D.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [-5, -45, 0],
            [-5, -45, 0],
            [-18, -14, 0],
            [-18, -14, 0],
            [-35, 28, 0],
            [-35, 28, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "I",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.I.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [10, -40, 0],
            [10, -40, 0],
            [17, 10, 0],
            [17, 10, 0],
            [40, -20, 0],
            [40, -20, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
    {
      type: "box",
      partyLetter: "Æ",
      texture: "logo",
      isFloating: true,
      rotation: [0, 0, 0],
      size: getSize(partyCollection.Æ.procent_af_stemmer_2022),
      motion: {
        inputRange: partyInputRange,
        outputRange: {
          position: [
            [30, -42, 0],
            [30, -42, 0],
            [35, 8, 0],
            [35, 8, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          scale: newScaleRange,
        },
      },
    },
  ],
};
