import type { Party_Letter, S } from "@models";
import { partyCollection } from "@assets";

const logoPosition: [number, number, number] = [25, 20, 0];
const logoNotScaled: [number, number, number] = [1, 1, 0];

function logoIsScaled(val: Party_Letter) {
  return [1, 1, partyCollection[val].procent_af_stemmer_2022 / 2] as [number, number, number];
}

export const intro: S = {
  mode: "auto",
  autoDuration: 14000,
  additionalScroll: [[0, 0, 0]],
  camera: {
    targetMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, 15, 20],
        [0, 5, 5],
      ],
    },
    positionMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, -110, 110],
        [0, -20, 110],
      ],
    },
    positionEntry: [-40, -100, 180],
    targetEntry: [0, -20, 50],
    targetExit: [0, -5, -20],
    positionExit: [0, -5, -15],
  },
  elements: [
    {
      type: "map",
      configs: [
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0, 0.005],
          partyLetter: partyCollection.A.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.07, 0.09],
          partyLetter: partyCollection.V.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.14, 0.16],
          partyLetter: partyCollection.Æ.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.22, 0.24],
          partyLetter: partyCollection.M.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.3, 0.32],
          partyLetter: partyCollection.B.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.38, 0.4],
          partyLetter: partyCollection.F.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.45, 0.47],
          partyLetter: partyCollection.D.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.53, 0.55],
          partyLetter: partyCollection.K.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.6, 0.62],
          partyLetter: partyCollection.O.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.67, 0.69],
          partyLetter: partyCollection.C.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.75, 0.77],
          partyLetter: partyCollection.I.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.83, 0.85],
          partyLetter: partyCollection.Å.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.92, 0.94],
          partyLetter: partyCollection.Ø.partyLetter,
          year: "2022",
        },
        {
          mapVariant: "party_vote_allocation",
          inputRange: [0.995, 1],
          partyLetter: partyCollection.A.partyLetter,
          year: "2022",
        },
      ],
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "A",
      size: 10,
      motion: {
        inputRange: [0, 0.005, 0.07],
        outputRange: {
          position: [logoPosition, logoPosition, logoPosition],
          scale: [logoIsScaled("A"), logoIsScaled("A"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "V",
      size: 10,
      motion: {
        inputRange: [0.01, 0.07, 0.09, 0.14],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("V"), logoIsScaled("V"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "Æ",
      size: 10,
      motion: {
        inputRange: [0.09, 0.14, 0.16, 0.22],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("Æ"), logoIsScaled("Æ"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "M",
      size: 10,
      motion: {
        inputRange: [0.16, 0.22, 0.24, 0.3],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("M"), logoIsScaled("M"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "B",
      size: 10,
      motion: {
        inputRange: [0.24, 0.3, 0.32, 0.38],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("B"), logoIsScaled("B"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "F",
      size: 10,
      motion: {
        inputRange: [0.32, 0.38, 0.4, 0.45],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("F"), logoIsScaled("F"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "D",
      size: 10,
      motion: {
        inputRange: [0.4, 0.45, 0.47, 0.53],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("D"), logoIsScaled("D"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "K",
      size: 10,
      motion: {
        inputRange: [0.47, 0.53, 0.55, 0.6],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("K"), logoIsScaled("K"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "O",
      size: 10,
      motion: {
        inputRange: [0.55, 0.6, 0.62, 0.67],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("O"), logoIsScaled("O"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "C",
      size: 10,
      motion: {
        inputRange: [0.62, 0.67, 0.69, 0.75],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("C"), logoIsScaled("C"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "I",
      size: 10,
      motion: {
        inputRange: [0.69, 0.75, 0.77, 0.82],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("I"), logoIsScaled("I"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "Å",
      size: 10,
      motion: {
        inputRange: [0.77, 0.83, 0.85, 0.92],

        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("Å"), logoIsScaled("Å"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "Ø",
      size: 10,
      motion: {
        inputRange: [0.85, 0.92, 0.94, 0.995],
        outputRange: {
          position: [logoPosition, logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("Ø"), logoIsScaled("Ø"), logoNotScaled],
        },
      },
    },
    {
      type: "box",
      texture: "logo",
      partyLetter: "A",
      size: 10,
      motion: {
        inputRange: [0.94, 0.995, 1],
        outputRange: {
          position: [logoPosition, logoPosition, logoPosition],
          scale: [logoNotScaled, logoIsScaled("A"), logoIsScaled("A")],
        },
      },
    },
  ],
};
