import type { Props } from "./index";
import type { C_C_E_Mesh_Box } from "@models";

export function filterMeshes(item: Props) {
  if (item?.contentElementSettings?.type === "box") {
    const { contentElementSettings, meshesTemplate } = item;
    return {
      ...item,
      meshesTemplate: meshesTemplate.filter(
        ({ userData }: C_C_E_Mesh_Box) => userData.partyLetter === contentElementSettings.partyLetter && contentElementSettings.texture === userData.texture
      ),
    };
  }

  return item;
}
