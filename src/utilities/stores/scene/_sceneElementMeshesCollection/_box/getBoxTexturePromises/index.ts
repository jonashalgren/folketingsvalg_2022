import { pipe } from "@helpers";
import type { Texture } from "three";
import type { P_Letter, P_Collection, S_E_Box_Data_Texture } from "@models";
import { setPromises } from "./setPromises";
import { setDetailList } from "./setDetailList";

export type PromiseProps = {
  partyLetter: P_Letter;
  color: string;
  map?: Texture;
  texture?: S_E_Box_Data_Texture;
};

export type DetailProps = {
  partyLetter: P_Letter;
  color: string;
  image?: string;
  texture?: S_E_Box_Data_Texture;
};

export type Props = {
  partyCollection: P_Collection;
  detailList?: DetailProps[];
  promises?: Promise<PromiseProps>[];
};

export const getBoxTexturePromises = pipe(setDetailList, setPromises);
