import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const three: S = {
  additionalScroll: [
    [0, 0.5, 0.5],
    [1, 0, 0.5],
  ],
  camera: {
    targetMain: {
      inputRange: [0, 0.33, 0.47, 0.69, 0.81, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
        [-12, 15, 5],
        [-12, 15, 5],
        [36, -15, 2],
        [36, -15, 2],
      ],
    },
    positionMain: {
      inputRange: [0, 0.33, 0.47, 0.69, 0.81, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [-50, -30, 60],
        [-50, -30, 60],
        [20, -40, 20],
        [20, -40, 20],
      ],
    },
    positionEntry: [-30, -350, 150],
    targetEntry: [0, 0, 10],
    targetExit: [45, -7, -3],
    positionExit: [45, -7, -2],
  },
  elements: {
    map: {
      focus: [
        { areas: ["Mariagerfjord"], inputRange: [0.45, 0.66] },
        { areas: ["Nørrebro"], inputRange: [0.83, 1] },
      ],

      configs: [
        {
          mapVariant: "blank",
          inputRange: [0, 0.001],
          color: partyCollection.Æ.secondaryColor,
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "Æ",
          year: "2022",
          inputRange: [0.1, 1],
        },
      ],
    },
    logos: [
      {
        partyLetter: "Æ",
        size: mapLogoSize,
        inputRange: [0, 0.1, 1],
        positionRange: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
        scaleRange: [mapLogoNotScaled, getMapLogoIsScaled("Æ", 2022), getMapLogoIsScaled("Æ", 2022)],
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
          inputRange: [0, 0.1, 1],
          colorRange: [partyCollection.Æ.color, partyCollection.Æ.color, partyCollection.Æ.color],
          valueRange: [0, partyCollection.Æ.procent_af_stemmer_2022, partyCollection.Æ.procent_af_stemmer_2022],
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
