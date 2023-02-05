import { readable } from "svelte/store";
import type { Texture } from "three";
import type { Party_Letter, S_E_M_Box, S_S_E_Box_Texture } from "@models";
import { partyCollection } from "@assets";
import { getBoxMeshes } from "./getBoxMeshes";
import { getBoxTexturePromises } from "./getBoxTexturePromises";

export type Props = { partyLetter: Party_Letter; color: string; map?: Texture; texture?: S_S_E_Box_Texture }[];

export const _box = readable<S_E_M_Box[]>([], function start(set) {
  const { promises } = getBoxTexturePromises({ partyCollection });
  Promise.all(promises).then((items: Props) => {
    set(getBoxMeshes(items));
  });
});
