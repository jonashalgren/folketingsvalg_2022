import { C_S_Element_Type, type C_Scene_Settings, type C_S_Elements_Meshes } from "@models";
import {
  Canvas_Scene_Element_Box,
  Canvas_Scene_Element_Map,
  Canvas_Scene_Element_Transition,
  Canvas_Scene_Element_Number,
  Canvas_Scene_Element_Text,
  Canvas_Scene_Element_Figure,
} from "@classes";

type Props = {
  sceneSettings: C_Scene_Settings;
  elementsMeshes: C_S_Elements_Meshes;
};

export function getElements({ sceneSettings, elementsMeshes }: Props) {
  return sceneSettings.elements
    .map((elementSettings, index) => {
      switch (elementSettings.type) {
        case C_S_Element_Type.BOX:
          return new Canvas_Scene_Element_Box(elementSettings, elementsMeshes.box, sceneSettings, index);
        case C_S_Element_Type.MAP:
          return new Canvas_Scene_Element_Map(elementSettings, elementsMeshes.map, sceneSettings);
        case C_S_Element_Type.TRANSITION:
          return new Canvas_Scene_Element_Transition(elementSettings);
        case C_S_Element_Type.NUMBER:
          return new Canvas_Scene_Element_Number(elementSettings, sceneSettings);
        case C_S_Element_Type.TEXT:
          return new Canvas_Scene_Element_Text(elementSettings, sceneSettings);
        case C_S_Element_Type.FIGURE:
          return new Canvas_Scene_Element_Figure(elementSettings, elementsMeshes.figure, sceneSettings);

        default:
          break;
      }
    })
    .filter((item) => item);
}
