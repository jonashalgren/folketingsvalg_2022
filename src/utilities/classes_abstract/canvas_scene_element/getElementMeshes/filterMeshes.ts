import type { Props } from "./index";
import { C_S_Element_Type, type C_S_E_Mesh_Box } from "@models";

export function filterMeshes(item: Props) {
  if (item.elementSettings.type === C_S_Element_Type.BOX) {
    const { elementSettings } = item;
    return {
      ...item,
      meshes: item.elementMeshes.filter(
        ({ userData }: C_S_E_Mesh_Box) => userData.partyLetter === elementSettings.partyLetter && elementSettings.texture === userData.texture
      ),
    };
  }

  return {
    ...item,
    meshes: item.elementMeshes,
  };
}
