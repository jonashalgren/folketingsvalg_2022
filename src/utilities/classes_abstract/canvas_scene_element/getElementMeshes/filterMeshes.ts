import type { Props } from "./index";
import { C_C_Element_Type, type C_C_E_Mesh_Box } from "@models";

export function filterMeshes(item: Props) {
  if (item.elementSettings.type === C_C_Element_Type.box) {
    const { elementSettings } = item;
    return {
      ...item,
      meshes: item.elementMeshes.filter(
        ({ userData }: C_C_E_Mesh_Box) => userData.partyLetter === elementSettings.partyLetter && elementSettings.texture === userData.texture
      ),
    };
  }

  return {
    ...item,
    meshes: item.elementMeshes,
  };
}
