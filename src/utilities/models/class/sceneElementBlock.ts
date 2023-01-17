import type { P_Letter } from "@models";
import type { Group } from "three";

export type S_E_Block_Image = {
  partyLetter: P_Letter;
  group: Group;
};

export type S_E_Block_Logo = {
  partyLetter: P_Letter;
  group: Group;
};

export type S_E_Block_Figure = Group;

export type S_E_Block_Text = Group;

export type S_E_Block_Map = Group;

export type S_E_Blocks = {
  images: S_E_Block_Image[];
  logos: S_E_Block_Logo[];
  figure: S_E_Block_Figure;
  text: S_E_Block_Text;
  map: S_E_Block_Map;
};
