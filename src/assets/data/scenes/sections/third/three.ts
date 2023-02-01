import type { S } from "@models";
import { partyCollection, fonts } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const three: S = {
  additionalScroll: [
    [0, 0.5, 0],
    [1, 0.5, 0.5],
  ],
  camera: {
    targetMain: {
      inputRange: [0, 0.62, 0.81, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
        [-28, 15, 2],
        [-28, 15, 2],
      ],
    },
    positionMain: {
      inputRange: [0, 0.62, 0.81, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [-10, -25, 50],
        [-10, -25, 50],
      ],
    },
    positionEntry: [-120, -120, 350],
    targetEntry: [0, 0, 10],
    targetExit: [-45, 45, -4],
    positionExit: [-45, 45, -2],
  },
  elements: [
    {
      type: "map",
      focus: [{ areas: ["Skive"], inputRange: [0.67, 1] }],
      configs: [
        {
          mapVariant: "blank",
          inputRange: [0, 0.001],
          color: partyCollection.V.secondaryColor,
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "V",
          year: "2019",
          inputRange: [0.1, 0.29],
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "V",
          year: "2022",
          inputRange: [0.41, 1],
        },
      ],
    },
    {
      type: "box",
      partyLetter: "V",
      texture: "logo",
      size: mapLogoSize,
      motion: {
        inputRange: [0, 0.001, 0.1, 0.29, 0.41, 1],
        outputRange: {
          position: [
            mapLogoPosition,
            mapLogoPosition,
            mapLogoPosition,
            mapLogoPosition,
            mapLogoPosition,
            mapLogoPosition,
          ],
          scale: [
            mapLogoNotScaled,
            mapLogoNotScaled,
            getMapLogoIsScaled("V", 2019),
            getMapLogoIsScaled("V", 2019),
            getMapLogoIsScaled("V", 2022),
            getMapLogoIsScaled("V", 2022),
          ],
        },
      },
    },
    {
      type: "number",
      font: fonts.ane,
      unit: "%",
      decimals: 1,
      textAlign: "center",
      rotation: [0, 0, 0],
      motion: {
        position: {
          inputRange: [0, 1],
          outputRange: [
            [26, 9, 0],
            [26, 9, 0],
          ],
        },
        color: {
          inputRange: [0, 0.001, 0.1, 0.29, 0.41, 1],
          outputRange: [
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
            partyCollection.V.color,
          ],
        },
        value: {
          inputRange: [0, 0.001, 0.1, 0.29, 0.41, 1],
          outputRange: [
            0,
            0,
            partyCollection.V.procent_af_stemmer_2019,
            partyCollection.V.procent_af_stemmer_2019,
            partyCollection.V.procent_af_stemmer_2022,
            partyCollection.V.procent_af_stemmer_2022,
          ],
        },
        size: {
          inputRange: [0, 0.001, 0.1, 0.29, 0.41, 1],
          outputRange: [0, 0, mapNumberSize, mapNumberSize, mapNumberSize, mapNumberSize],
        },
      },
    },
  ],
};
