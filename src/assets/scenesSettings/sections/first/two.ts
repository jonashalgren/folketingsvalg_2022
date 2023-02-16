import type { C_Scene_Settings } from "@models";
import { partyCollection, fonts } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";
import { C_S_Element_Type } from "@models";

export const two: C_Scene_Settings = {
  extraTextMargin: [
    { index: 0, top: 0.5, bottom: 0.5 },
    { index: 1, top: 0, bottom: 0.5 },
  ],
  camera: {
    targetMain: {
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
    positionMain: {
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
    positionEntry: [40, -350, 50],
    targetEntry: [0, 0, 10],
    targetExit: [-30, 45, -10],
    positionExit: [-30, 45, -5],
  },
  elements: [
    {
      type: C_S_Element_Type.map,
      focus: [
        { areas: ["Gentofte"], inputRange: [0.45, 0.66] },
        { areas: ["Skive", "Struer"], inputRange: [0.83, 1] },
      ],
      configs: [
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
    {
      type: C_S_Element_Type.box,
      partyLetter: "M",
      texture: "logo",
      size: mapLogoSize,
      motion: {
        inputRange: [0, 0.1, 1],
        outputRange: {
          position: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
          scale: [mapLogoNotScaled, getMapLogoIsScaled("M", 2022), getMapLogoIsScaled("M", 2022)],
        },
      },
    },
    {
      type: C_S_Element_Type.number,
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
          outputRange: [partyCollection.M.color, partyCollection.M.color, partyCollection.M.color],
        },
        value: {
          inputRange: [0, 0.1, 1],
          outputRange: [0, partyCollection.M.procent_af_stemmer_2022, partyCollection.M.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.1, 1],
          outputRange: [0, mapNumberSize, mapNumberSize],
        },
      },
    },
  ],
};
