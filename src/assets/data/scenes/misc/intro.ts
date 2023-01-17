import type { P_Letter, S } from "@models";
import { partyCollection } from "@assets";

const logoPosition: [number, number, number] = [25, 20, 0];
const logoNotScaled: [number, number, number] = [1, 1, 0];

function logoIsScaled(val: P_Letter) {
  return [1, 1, partyCollection[val].procent_af_stemmer_2022 * 50] as [number, number, number];
}

export const intro: S = (function () {
  return {
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
    elements: {
      map: {
        animConfigs: [
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0, 0.005],
            partyLetter: partyCollection.A.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.07, 0.09],
            partyLetter: partyCollection.V.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.14, 0.16],
            partyLetter: partyCollection.Æ.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.22, 0.24],
            partyLetter: partyCollection.M.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.3, 0.32],
            partyLetter: partyCollection.B.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.38, 0.4],
            partyLetter: partyCollection.F.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.45, 0.47],
            partyLetter: partyCollection.D.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.53, 0.55],
            partyLetter: partyCollection.K.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.6, 0.62],
            partyLetter: partyCollection.O.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.67, 0.69],
            partyLetter: partyCollection.C.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.75, 0.77],
            partyLetter: partyCollection.I.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.83, 0.85],
            partyLetter: partyCollection.Å.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.92, 0.94],
            partyLetter: partyCollection.Ø.letter,
            year: "2022",
          },
          {
            mapVariant: "party_vote_allocation",
            inputRange: [0.995, 1],
            partyLetter: partyCollection.A.letter,
            year: "2022",
          },
        ],
        logo: [
          {
            partyLetter: "A",
            size: 10,
            inputRange: [0, 0.005, 0.07],
            positionRange: [logoPosition, logoPosition, logoPosition],
            scaleRange: [logoIsScaled("A"), logoIsScaled("A"), logoNotScaled],
          },
          {
            partyLetter: "V",
            size: 10,
            inputRange: [0.01, 0.07, 0.09, 0.14],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("V"), logoIsScaled("V"), logoNotScaled],
          },
          {
            partyLetter: "Æ",
            size: 10,
            inputRange: [0.09, 0.14, 0.16, 0.22],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("Æ"), logoIsScaled("Æ"), logoNotScaled],
          },
          {
            partyLetter: "M",
            size: 10,
            inputRange: [0.16, 0.22, 0.24, 0.3],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("M"), logoIsScaled("M"), logoNotScaled],
          },
          {
            partyLetter: "B",
            size: 10,
            inputRange: [0.24, 0.3, 0.32, 0.38],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("B"), logoIsScaled("B"), logoNotScaled],
          },
          {
            partyLetter: "F",
            size: 10,
            inputRange: [0.32, 0.38, 0.4, 0.45],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("F"), logoIsScaled("F"), logoNotScaled],
          },
          {
            partyLetter: "D",
            size: 10,
            inputRange: [0.4, 0.45, 0.47, 0.53],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("D"), logoIsScaled("D"), logoNotScaled],
          },
          {
            partyLetter: "K",
            size: 10,
            inputRange: [0.47, 0.53, 0.55, 0.6],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("K"), logoIsScaled("K"), logoNotScaled],
          },
          {
            partyLetter: "O",
            size: 10,
            inputRange: [0.55, 0.6, 0.62, 0.67],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("O"), logoIsScaled("O"), logoNotScaled],
          },
          {
            partyLetter: "C",
            size: 10,
            inputRange: [0.62, 0.67, 0.69, 0.75],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("C"), logoIsScaled("C"), logoNotScaled],
          },
          {
            partyLetter: "I",
            size: 10,
            inputRange: [0.69, 0.75, 0.77, 0.82],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("I"), logoIsScaled("I"), logoNotScaled],
          },
          {
            partyLetter: "Å",
            size: 10,
            inputRange: [0.77, 0.83, 0.85, 0.92],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("Å"), logoIsScaled("Å"), logoNotScaled],
          },
          {
            partyLetter: "Ø",
            size: 10,
            inputRange: [0.85, 0.92, 0.94, 0.995],
            positionRange: [logoPosition, logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("Ø"), logoIsScaled("Ø"), logoNotScaled],
          },
          {
            partyLetter: "A",
            size: 10,
            inputRange: [0.94, 0.995, 1],
            positionRange: [logoPosition, logoPosition, logoPosition],
            scaleRange: [logoNotScaled, logoIsScaled("A"), logoIsScaled("A")],
          },
        ],
      },
    },
  };
})();
