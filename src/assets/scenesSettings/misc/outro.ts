import type { C_Scene_Settings, Party_Letter } from "@models";
import { partyCollection } from "@assets";
import { C_S_Element_Type } from "@models";

const logoPosition: [number, number, number] = [25, 20, 0];
const logoNotScaled: [number, number, number] = [1, 1, 0];

function logoIsScaled(val: Party_Letter) {
  return [1, 1, partyCollection[val].procent_af_stemmer_2022 / 2] as [number, number, number];
}

export const outro: C_Scene_Settings = {
  mode: "auto",
  autoDuration: 14000,
  camera: {
    targetMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, 60, 15],
        [0, 60, 15],
      ],
    },
    positionMain: {
      inputRange: [0, 1],
      outputRange: [
        [0, -130, 75],
        [0, -130, 75],
      ],
    },
    positionEntry: [-40, -100, 350],
    targetEntry: [0, -20, 50],
    targetExit: [0, 60, 15],
    positionExit: [0, -130, 75],
  },
  elements: [
    { type: C_S_Element_Type.TRANSITION },
    {
      type: C_S_Element_Type.MAP,
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
      type: C_S_Element_Type.BOX,
      partyLetter: "A",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "V",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "Æ",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "M",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "B",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "F",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "D",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "K",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "O",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "C",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "I",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "Å",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "Ø",
      texture: "logo",
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
      type: C_S_Element_Type.BOX,
      partyLetter: "A",
      texture: "logo",
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
