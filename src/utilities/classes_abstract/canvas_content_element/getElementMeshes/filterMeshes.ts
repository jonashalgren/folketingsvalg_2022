import type { Props } from "./index";
import type { C_C_E_Mesh_Box } from "@models";

export function filterMeshes(item: Props) {
  if (item?.elementSettings?.type === "box") {
    const { elementSettings, meshesTemplate } = item;
    return {
      ...item,
      meshes: meshesTemplate.filter(({ userData }: C_C_E_Mesh_Box) => userData.partyLetter === elementSettings.partyLetter && elementSettings.texture === userData.texture),
    };
  }

  return {
    ...item,
    meshes: item.meshesTemplate,
  };
}
