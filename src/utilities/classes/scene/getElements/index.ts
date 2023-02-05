import type { S_Settings, S_E_Mesh_Templates } from "@models";
import { Scene_Element_Box, Scene_Element_Map, Scene_Element_Transition } from "@classes";

type Props = {
  settings: S_Settings;
  elementsMeshTemplates: S_E_Mesh_Templates;
};

export function getElements({ settings, elementsMeshTemplates }: Props) {
  return settings.elements
    .map((item, index) => {
      switch (item.type) {
        case "box":
          return new Scene_Element_Box(item, elementsMeshTemplates.box, settings, index);
        case "map":
          return new Scene_Element_Map(item, elementsMeshTemplates.map, settings);
        case "transition":
          return new Scene_Element_Transition(item);
        default:
          return;
      }
    })
    .filter((item) => item);
}
