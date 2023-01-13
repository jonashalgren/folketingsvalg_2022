import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const three: S = {
  camera: {
    target: {
      inputRange: [0, 0.51, 0.72, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
        [-15, -15, 2],
        [-15, -15, 2],
      ],
    },
    position: {
      inputRange: [0, 0.51, 0.72, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [-10, -40, 40],
        [-10, -40, 40],
      ],
    },
    entryPosition: [50, -350, 50],
    entryTarget: [0, 0, 10],
    exitTarget: [-4, -15, -4],
    exitPosition: [-4, -15, -2],
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
    logo: [
      {
        partyLetter: "O",
        size: mapLogoSize,
        inputRange: [0, 0.01, 0.16, 1],
        positionRange: [mapLogoPosition, mapLogoPosition, mapLogoPosition, mapLogoPosition],
        scaleRange: [mapLogoNotScaled, mapLogoNotScaled, getMapLogoIsScaled("O", 200), getMapLogoIsScaled("O", 200)],
      },
    ],
    number: [
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
