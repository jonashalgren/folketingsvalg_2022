import type { S } from "@models";
import { partyCollection, threeProperties } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const two: S = {
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
        [15, -43, 5],
        [15, -43, 5],
        [-35, 25, 2],
        [-35, 25, 2],
      ],
    },
    positionMain: {
      inputRange: [0, 0.33, 0.47, 0.69, 0.81, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [-30, -75, 70],
        [-30, -75, 70],
        [-35, 0, 60],
        [-35, 0, 60],
      ],
    },
    positionEntry: [-30, -350, 150],
    targetEntry: [0, 0, 10],
    targetExit: [-38, 45, -5],
    positionExit: [-38, 45, -3],
  },
  elements: {
    map: {
      focus: [
        { areas: ["Lolland"], inputRange: [0.4, 0.66] },
        { areas: ["Thisted"], inputRange: [0.78, 1] },
      ],
      configs: [
        {
          mapVariant: "blank",
          inputRange: [0, 0.001],
          color: partyCollection.A.secondaryColor,
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "A",
          year: "2022",
          inputRange: [0.1, 1],
        },
      ],
    },
    logos: [
      {
        partyLetter: "A",
        size: mapLogoSize,
        inputRange: [0, 0.1, 1],
        positionRange: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
        scaleRange: [mapLogoNotScaled, getMapLogoIsScaled("A", 2022), getMapLogoIsScaled("A", 2022)],
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
          colorRange: [partyCollection.A.color, partyCollection.A.color, partyCollection.A.color],
          valueRange: [0, partyCollection.A.procent_af_stemmer_2022, partyCollection.A.procent_af_stemmer_2022],
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
