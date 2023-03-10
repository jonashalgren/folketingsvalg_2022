import type { C_Scene_Settings } from "@models";
import { partyCollection, fonts } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";
import { C_S_Element_Type } from "@models";

export const three: C_Scene_Settings = {
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
  elements: [
    {
      type: C_S_Element_Type.MAP,
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
    {
      type: C_S_Element_Type.BOX,
      partyLetter: "Æ",
      texture: "logo",
      size: mapLogoSize,
      motion: {
        inputRange: [0, 0.1, 1],
        outputRange: {
          position: [mapLogoPosition, mapLogoPosition, mapLogoPosition],
          scale: [mapLogoNotScaled, getMapLogoIsScaled("Æ", 2022), getMapLogoIsScaled("Æ", 2022)],
        },
      },
    },
    {
      type: C_S_Element_Type.NUMBER,
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
          outputRange: [partyCollection.Æ.color, partyCollection.Æ.color, partyCollection.Æ.color],
        },
        value: {
          inputRange: [0, 0.1, 1],
          outputRange: [0, partyCollection.Æ.procent_af_stemmer_2022, partyCollection.Æ.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.1, 1],
          outputRange: [0, mapNumberSize, mapNumberSize],
        },
      },
    },
  ],
};
