import type { C_S_Settings, C_S_E_Mesh_Templates } from "@models";
import { Canvas_Scene_Element_Box, Canvas_Scene_Element_Map, Canvas_Scene_Element_Transition } from "@classes";

type Props = {
  sceneSettings: C_S_Settings;
  elementsMeshTemplates: C_S_E_Mesh_Templates;
};

export function getElements({ sceneSettings, elementsMeshTemplates }: Props) {
  return sceneSettings.elements
    .map((item, index) => {
      switch (item.type) {
        case "box":
          return new Canvas_Scene_Element_Box(item, elementsMeshTemplates.box, sceneSettings, index);
        case "map":
          return new Canvas_Scene_Element_Map(item, elementsMeshTemplates.map, sceneSettings);
        case "transition":
          return new Canvas_Scene_Element_Transition(item);
        default:
          return;
      }
    })
    .filter((item) => item);
}
