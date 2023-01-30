import type { Props } from "./index";
import type { S_E_Mesh } from "@models";

export function filterMeshes(item: Props) {
  if (item.data.type === "box") {
    const { data, meshes } = item;
    return {
      ...item,
      meshes: meshes.filter(
        ({ userData }: S_E_Mesh) => userData?.partyLetter === data.partyLetter && data?.texture === userData?.texture
      ),
    };
  }

  return item;
}
