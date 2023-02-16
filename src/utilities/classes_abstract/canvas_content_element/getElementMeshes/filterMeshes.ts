import type { Props } from "./index";
import { C_C_Element_Type, type C_C_E_Mesh_Box } from "@models";

export function filterMeshes(item: Props) {
  let meshes = [];

  if (item.elementSettings.type === C_C_Element_Type.box) {
    const { elementSettings } = item;
    meshes = elementSettings.templateMeshes.filter(
      ({ userData }: C_C_E_Mesh_Box) => userData.partyLetter === elementSettings.partyLetter && elementSettings.texture === userData.texture
    );
  } else if ("templateMeshes" in item.elementSettings) {
    const { elementSettings } = item;
    meshes = elementSettings.templateMeshes;
  }

  return {
    ...item,
    meshes,
  };
}
