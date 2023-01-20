import type { P_Letter, ER_Year } from "@models";

export type S_E_Map_Anim_Config = S_E_Map_Anim_Config_Party_Allocation | S_E_Map_Anim_Config_Blank;

type Default_Properties = {
  inputRange: [number, number];
};

export type S_E_Map_Anim_Config_Party_Allocation = {
  mapVariant: "party_vote_allocation";
  year: ER_Year;
  partyLetter: P_Letter;
} & Default_Properties;

export type S_E_Map_Anim_Config_Blank = {
  mapVariant: "blank";
  color?: string;
} & Default_Properties;
