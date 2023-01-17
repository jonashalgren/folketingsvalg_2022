import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const three: S = {
  camera: {
    targetMain: {
      inputRange: [0, 0.51, 0.72, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
        [-15, -15, 2],
        [-15, -15, 2],
      ],
    },
    positionMain: {
      inputRange: [0, 0.51, 0.72, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [-10, -40, 40],
        [-10, -40, 40],
      ],
    },
    positionEntry: [50, -350, 50],
    targetEntry: [0, 0, 10],
    targetExit: [-4, -15, -4],
    positionExit: [-4, -15, -2],
  },
  additionalScroll: [[0, 0.5, 0.5]],
  elements: {
    map: {
      focus: [{ areas: ["Hedensted", "Vejle_Nord"], inputRange: [0.7, 1] }],
      animConfigs: [
        {
          mapVariant: "blank",
          inputRange: [0, 0.001],
          color: partyCollection.O.secondaryColor,
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "O",
          year: "2022",
          inputRange: [0.16, 1],
        },
      ],
    },
    logos: [
      {
        partyLetter: "O",
        size: mapLogoSize,
        inputRange: [0, 0.01, 0.16, 1],
        positionRange: [mapLogoPosition, mapLogoPosition, mapLogoPosition, mapLogoPosition],
        scaleRange: [mapLogoNotScaled, mapLogoNotScaled, getMapLogoIsScaled("O", 200), getMapLogoIsScaled("O", 200)],
      },
    ],
    numbers: [
      {
        font: threeProperties.font_ane,
        positionRange: {
          inputRange: [0, 1],
          outputRange: [
            [26, 9, 0],
            [26, 9, 0],
          ],
        },
        animRange: {
          inputRange: [0, 0.001, 0.16, 1],
          colorRange: [
            partyCollection.O.color,
            partyCollection.O.color,
            partyCollection.O.color,
            partyCollection.O.color,
          ],
          valueRange: [0, 0, partyCollection.O.procent_af_stemmer_2022, partyCollection.O.procent_af_stemmer_2022],
          sizeRange: [0, 0, mapNumberSize, mapNumberSize],
        },
        unit: "%",
        decimals: 1,
        textAlign: "center",
        rotation: [0, 0, 0],
      },
    ],
  },
};
