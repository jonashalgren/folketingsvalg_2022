import type { C_S_Settings } from "@models";
import { partyCollection, fonts } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";

export const two: C_S_Settings = {
  extraTextMargin: [
    { index: 0, top: 0.5, bottom: 0.5 },
    { index: 1, top: 0, bottom: 0.5 },
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
  elements: [
    {
      type: "map",
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
    {
      type: "box",
      partyLetter: "A",
      texture: "logo",
      size: mapLogoSize,
      motion: {
        inputRange: [0, 0.1, 1],
        outputRange: {
          position: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
          scale: [mapLogoNotScaled, getMapLogoIsScaled("A", 2022), getMapLogoIsScaled("A", 2022)],
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
          inputRange: [0, 0.1, 1],
          outputRange: [partyCollection.A.color, partyCollection.A.color, partyCollection.A.color],
        },
        value: {
          inputRange: [0, 0.1, 1],
          outputRange: [0, partyCollection.A.procent_af_stemmer_2022, partyCollection.A.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.1, 1],
          outputRange: [0, mapNumberSize, mapNumberSize],
        },
      },
    },
  ],
};
