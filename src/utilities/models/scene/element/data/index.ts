import type { Party_Letter, Motion } from "@models";
import type { S_E_Map_Data_Area_Id } from "./mapAreaId";
export * from "./mapAreaId";

//------------------------------------------------------------

export type S_E_Box_Data = {
  type?: "box";
  texture?: S_E_Box_Data_Texture;
  partyLetter: Party_Letter;
  inputRange: number[];
  positionRange: [number, number, number][];
  scaleRange?: [number, number, number][];
  rotation?: [number, number, number];
  size: number;
  isFloating?: boolean;
};

export type S_E_Box_Data_Texture = "logo" | "leader";

//------------------------------------------------------------

export type S_E_Map_Data = {
  type?: "map";
  configs: (S_E_Map_Data_Config_Party_Allocation | S_E_Map_Data_Config_Blank)[];
  focus?: S_E_Map_Data_Focus[];
  scaleZRange?: Motion<number>;
  colorRange?: Motion<string>;
};

export type S_E_Map_Data_Focus = {
  inputRange: [number, number];
  areas: S_E_Map_Data_Area_Id[];
};

export type S_E_Map_Data_Year = "2019" | "2022";

export type S_E_Map_Data_Config_Party_Allocation = {
  mapVariant: "party_vote_allocation";
  year: S_E_Map_Data_Year;
  partyLetter: Party_Letter;
  inputRange: [number, number];
};

export type S_E_Map_Data_Config_Blank = {
  mapVariant: "blank";
  color?: string;
  inputRange: [number, number];
};

//------------------------------------------------------------

export type S_E_Figure_Data = {
  type?: "figure";
  inputRange: [number, number];
  amount: number;
  color: string;
  rows: number;
  width: number;
  items: S_E_Figure_Data_Item[];
};

export type S_E_Figure_Data_Item = {
  inputRange: [number, number];
  disabled: number;
};

//------------------------------------------------------------

export type S_E_Text_Data = {
  type?: "text";
  font: string;
  text: string;
  fontSize: number;
  maxWidth: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
  position: [number, number, number];
  color: string;
  isResponsive?: boolean;
};

//------------------------------------------------------------

export type S_E_Number_Data = {
  type?: "number";
  font: string;
  unit: string;
  animRange: {
    inputRange: number[];
    colorRange: string[];
    valueRange: number[];
    sizeRange: number[];
  };
  positionRange: Motion<[number, number, number]>;
  decimals: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
};

//------------------------------------------------------------

export type S_E_Data_Collection = {
  map?: S_E_Map_Data;
  numbers?: S_E_Number_Data[];
  texts?: S_E_Text_Data[];
  boxes?: S_E_Box_Data[];
  figures?: S_E_Figure_Data[];
};

//------------------------------------------------------------

export type S_E_Data = S_E_Map_Data | S_E_Number_Data | S_E_Text_Data | S_E_Box_Data | S_E_Figure_Data;
