import type { S_Settings, S_E_Mesh_Templates } from "@models";
import { Scene_Element_Box, Scene_Element_Map } from "@classes";

type Props = {
  settings: S_Settings;
  meshTemplates: S_E_Mesh_Templates;
};

export function getElements({ settings, meshTemplates }: Props) {
  return settings.elements
    .map((item, index) => {
      switch (item.type) {
        case "box":
          return new Scene_Element_Box(item, meshTemplates.box, settings, index);
        case "map":
          return new Scene_Element_Map(item, meshTemplates.map, settings);
        default:
          return;
      }
    })
    .filter((item) => item);
}
