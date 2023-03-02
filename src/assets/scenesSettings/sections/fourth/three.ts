import type { C_Scene_Settings } from "@models";
import { partyCollection, fonts } from "@assets";
import { getMapLogoIsScaled, mapLogoNotScaled, mapLogoPosition, mapNumberSize, mapLogoSize } from "../../vars";
import { C_S_Element_Type } from "@models";

export const three: C_Scene_Settings = {
  extraTextMargin: [{ index: 0, top: 0.5, bottom: 0.5 }],
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
  elements: [
    {
      type: C_S_Element_Type.MAP,
      focus: [{ areas: ["Hedensted", "Vejle_Nord"], inputRange: [0.7, 1] }],
      configs: [
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
    {
      type: C_S_Element_Type.BOX,
      partyLetter: "O",
      texture: "logo",
      size: mapLogoSize,
      motion: {
        inputRange: [0, 0.01, 0.16, 1],
        outputRange: {
          position: [mapLogoPosition, mapLogoPosition, mapLogoPosition, mapLogoPosition],
          scale: [mapLogoNotScaled, mapLogoNotScaled, getMapLogoIsScaled("O", 200), getMapLogoIsScaled("O", 200)],
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
          inputRange: [0, 0.001, 0.16, 1],
          outputRange: [partyCollection.O.color, partyCollection.O.color, partyCollection.O.color, partyCollection.O.color],
        },
        value: {
          inputRange: [0, 0.001, 0.16, 1],
          outputRange: [0, 0, partyCollection.O.procent_af_stemmer_2022, partyCollection.O.procent_af_stemmer_2022],
        },
        size: {
          inputRange: [0, 0.001, 0.16, 1],
          outputRange: [0, 0, mapNumberSize, mapNumberSize],
        },
      },
    },
  ],
};
