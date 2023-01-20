import type { P_Letter, ER_Year, Motion } from "@models";
export * from "./mapAreaId";
import type { S_E_Map_Data_Area_Id } from "./mapAreaId";
//------------------------------------------------------------

export type S_E_Image_Data = {
  partyLetter: P_Letter;
  inputRange: number[];
  positionRange: [number, number, number][];
  scaleRange?: [number, number, number][];
  rotation?: [number, number, number];
  size?: number;
};

//------------------------------------------------------------

export type S_E_Logo_Data = {
  partyLetter: P_Letter;
  inputRange: number[];
  positionRange: [number, number, number][];
  scaleRange?: [number, number, number][];
  rotation?: [number, number, number];
  size?: number;
  isLetterHidden?: boolean;
};

//------------------------------------------------------------

export type S_E_Map_Data = {
  configs: (S_E_Map_Data_Config_Party_Allocation | S_E_Map_Data_Config_Blank)[];
  focus?: S_E_Map_Data_Focus[];
};

export type S_E_Map_Data_Focus = {
  inputRange: [number, number];
  areas: S_E_Map_Data_Area_Id[];
};

export type S_E_Map_Data_Config_Party_Allocation = {
  mapVariant: "party_vote_allocation";
  year: ER_Year;
  partyLetter: P_Letter;
  inputRange: [number, number];
};

export type S_E_Map_Data_Config_Blank = {
  mapVariant: "blank";
  color?: string;
  inputRange: [number, number];
};

//------------------------------------------------------------

export type S_E_Figure_Data = {
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
  logos?: S_E_Logo_Data[];
  images?: S_E_Image_Data[];
  figures?: S_E_Figure_Data[];
};

//------------------------------------------------------------

export type S_E_Data =
  | S_E_Map_Data
  | S_E_Number_Data
  | S_E_Text_Data
  | S_E_Logo_Data
  | S_E_Image_Data
  | S_E_Figure_Data;
