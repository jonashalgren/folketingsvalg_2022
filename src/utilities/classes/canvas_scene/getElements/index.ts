import { C_C_Element_Type, type C_Content_Settings, type C_C_Elements_Meshes } from "@models";
import { Canvas_Scene_Element_Box, Canvas_Scene_Element_Map, Canvas_Scene_Element_Transition } from "@classes";

type Props = {
  sceneSettings: C_Content_Settings;
  elementsMeshes: C_C_Elements_Meshes;
};

export function getElements({ sceneSettings, elementsMeshes }: Props) {
  return sceneSettings.elements
    .map((elementSettings, index) => {
      if (elementSettings.type === C_C_Element_Type.box) {
        return new Canvas_Scene_Element_Box(elementSettings, elementsMeshes.box, sceneSettings, index);
      } else if (elementSettings.type === C_C_Element_Type.map) {
        return new Canvas_Scene_Element_Map(elementSettings, elementsMeshes.map, sceneSettings);
      } else if (elementSettings.type === C_C_Element_Type.transition) {
        return new Canvas_Scene_Element_Transition(elementSettings);
      }
    })
    .filter((item) => item);
}
