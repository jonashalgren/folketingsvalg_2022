import { readable } from "svelte/store";
import type { Texture } from "three";
import type { Party_Letter, S_E_Box_Mesh, S_E_Box_Data_Texture } from "@models";
import { partyCollection } from "@assets";
import { getBoxMeshes } from "./getBoxMeshes";
import { getBoxTexturePromises } from "./getBoxTexturePromises";

export type Props = { partyLetter: Party_Letter; color: string; map?: Texture; texture?: S_E_Box_Data_Texture }[];

export const _box = readable<S_E_Box_Mesh[]>([], function start(set) {
  const { promises } = getBoxTexturePromises({ partyCollection });
  Promise.all(promises).then((items: Props) => {
    set(getBoxMeshes(items));
  });
});
