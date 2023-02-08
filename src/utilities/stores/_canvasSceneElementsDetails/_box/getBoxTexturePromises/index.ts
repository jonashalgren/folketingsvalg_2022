import { pipe } from "@helpers";
import type { Texture } from "three";
import type { Party_Letter, Party_Collection, C_S_S_E_Box_Texture } from "@models";
import { setPromises } from "./setPromises";
import { setDetailList } from "./setDetailList";

export type PromiseProps = {
  partyLetter: Party_Letter;
  color: string;
  map?: Texture;
  texture?: C_S_S_E_Box_Texture;
};

export type DetailProps = {
  partyLetter: Party_Letter;
  color: string;
  image?: string;
  texture?: C_S_S_E_Box_Texture;
};

export type Props = {
  partyCollection: Party_Collection;
  detailList?: DetailProps[];
  promises?: Promise<PromiseProps>[];
};

export const getBoxTexturePromises = pipe(setDetailList, setPromises);
