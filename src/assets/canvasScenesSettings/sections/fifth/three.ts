import type { C_Content_Settings } from "@models";
import { partyCollection, fonts } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";
import { C_C_Element_Type } from "@models";

export const three: C_Content_Settings = {
  extraTextMargin: [{ index: 0, top: 0.5, bottom: 0.5 }],
  camera: {
    targetMain: {
      inputRange: [0, 0.51, 0.71, 1],
      outputRange: [
        [0, -5, 10],
        [0, -5, 10],
        [38, -15, 5],
        [38, -15, 5],
      ],
    },
    positionMain: {
      inputRange: [0, 0.51, 0.71, 1],
      outputRange: [
        [0, -40, 100],
        [0, -40, 100],
        [25, -35, 25],
        [25, -35, 25],
      ],
    },
    positionEntry: [180, -80, 350],
    targetEntry: [0, 0, 10],
    targetExit: [35, -20, -4],
    positionExit: [35, -20, -3],
  },
  elements: [
    {
      type: C_C_Element_Type.map,
      focus: [{ areas: ["Falkoner"], inputRange: [0.67, 1] }],
      configs: [
        {
          mapVariant: "blank",
          inputRange: [0, 0.001],
          color: partyCollection.B.secondaryColor,
        },
        {
          mapVariant: "party_vote_allocation",
          partyLetter: "B",
          year: "2022",
          inputRange: [0.16, 1],
        },
      ],
    },
    {
      type: C_C_Element_Type.box,
      partyLetter: "B",
      texture: "logo",
      size: mapLogoSize,
      motion: {
        inputRange: [0, 0.16, 1],
        outputRange: {
          position: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
          scale: [mapLogoNotScaled, getMapLogoIsScaled("B", 2022), getMapLogoIsScaled("B", 2022)],
        },
      },
    },
    {
      type: C_C_Element_Type.number,
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
          inputRange: [0, 0.16, 1],
          outputRange: [partyCollection.B.color, partyCollection.B.color, partyCollection.B.color],
        },
        value: {
          inputRange: [0, 0.16, 1],
          outputRange: [0, partyCollection.B.procent_af_stemmer_2022, partyCollection.B.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.16, 1],
          outputRange: [0, mapNumberSize, mapNumberSize],
        },
      },
    },
  ],
};
