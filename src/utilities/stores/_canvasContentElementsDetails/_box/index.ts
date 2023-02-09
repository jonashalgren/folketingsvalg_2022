import { readable } from "svelte/store";
import type { Texture } from "three";
import type { Party_Letter, C_C_E_Mesh_Box, C_C_S_Element_Box_Texture } from "@models";
import { partyCollection } from "@assets";
import { getBoxMeshes } from "./getBoxMeshes";
import { getBoxTexturePromises } from "./getBoxTexturePromises";

export type Props = { partyLetter: Party_Letter; color: string; map?: Texture; texture?: C_C_S_Element_Box_Texture }[];

export const _box = readable<C_C_E_Mesh_Box[]>([], function start(set) {
  const { promises } = getBoxTexturePromises({ partyCollection });
  Promise.all(promises).then((items: Props) => {
    set(getBoxMeshes(items));
  });
});
