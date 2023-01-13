import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const two: S = {
  additionalScroll: [
    [0, 0.5, 0.5],
    [1, 0, 0.5],
  ],
  camera: {
    target: {
      inputRange: [0, 0.34, 0.47, 0.69, 0.81, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
        [38, -9, 5],
        [38, -9, 5],
        [-30, 15, 5],
        [-30, 15, 5],
      ],
    },
    position: {
      inputRange: [0, 0.34, 0.47, 0.69, 0.81, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [26, -40, 35],
        [26, -40, 35],
        [-30, -30, 50],
        [-30, -30, 50],
      ],
    },
    entryPosition: [40, -350, 50],
    entryTarget: [0, 0, 10],
    exitTarget: [-30, 45, -10],
    exitPosition: [-30, 45, -5],
  },

  elements: {
    map: {
      focus: [
        { areas: ["Gentofte"], inputRange: [0.45, 0.66] },
        { areas: ["Skive", "Struer"], inputRange: [0.83, 1] },
      ],
      animConfigs: [
        {
          mapVariant: "blank",
          color: partyCollection.M.secondaryColor,
          inputRange: [0, 0.001],
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "M",
          year: "2022",
          inputRange: [0.1, 1],
        },
      ],
    },
    logo: [
      {
        partyLetter: "M",
        size: mapLogoSize,
        inputRange: [0, 0.1, 1],
        positionRange: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
        scaleRange: [mapLogoNotScaled, getMapLogoIsScaled("M", 2022), getMapLogoIsScaled("M", 2022)],
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
          inputRange: [0, 0.1, 1],
          colorRange: [partyCollection.M.color, partyCollection.M.color, partyCollection.M.color],
          valueRange: [0, partyCollection.M.procent_af_stemmer_2022, partyCollection.M.procent_af_stemmer_2022],
          sizeRange: [0, mapNumberSize, mapNumberSize],
        },
        unit: "%",
        decimals: 1,
        textAlign: "center",
        rotation: [0, 0, 0],
      },
    ],
  },
};
