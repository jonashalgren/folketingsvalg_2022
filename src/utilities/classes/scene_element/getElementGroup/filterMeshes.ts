import type { Props } from "./index";
import type { S_E_M_Box } from "@models";

export function filterMeshes(item: Props) {
  if (item.elementSettings.type === "box") {
    const { elementSettings, meshesTemplate } = item;
    return {
      ...item,
      meshesTemplate: meshesTemplate.filter(
        ({ userData }: S_E_M_Box) =>
          userData.partyLetter === elementSettings.partyLetter && elementSettings.texture === userData.texture
      ),
    };
  }

  return item;
}
