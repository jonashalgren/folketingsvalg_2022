import type { Party_Letter, Motion } from "@models";
import type { Vector3Tuple } from "three";
import type { S_E_Map_Data_Area_Id } from "./mapAreaId";
export * from "./mapAreaId";

//------------------------------------------------------------

export type S_E_Box_Data = {
  type: "box";
  texture?: S_E_Box_Data_Texture;
  partyLetter: Party_Letter;
  size: number;
  isFloating?: boolean;
  rotation?: [number, number, number];
  motion: S_E_Box_Data_Motion;
};

export type S_E_Box_Data_Motion = {
  inputRange: number[];
  outputRange: {
    position?: [number, number, number][];
    scale?: [number, number, number][];
  };
};

export type S_E_Box_Data_Texture = "logo" | "leader";

//------------------------------------------------------------

export type S_E_Map_Data = {
  type: "map";
  configs: S_E_Map_Data_Config[];
  focus?: S_E_Map_Data_Focus[];
};

export type S_E_Map_Data_Focus = {
  inputRange: [number, number];
  areas: S_E_Map_Data_Area_Id[];
};

export type S_E_Map_Data_Year = "2019" | "2022";

export type S_E_Map_Data_Config = S_E_Map_Data_Config_Party_Allocation | S_E_Map_Data_Config_Blank;

export type S_E_Map_Data_Config_Party_Allocation = {
  mapVariant: "party_vote_allocation";
  year: S_E_Map_Data_Year;
  partyLetter: Party_Letter;
  inputRange: [number, number];
  areasProperties?: S_E_Map_Data_Config_Party_Allocation_area_Properties[];
  highestAreaResultPct?: number;
  lowestAreaResultPct?: number;
};
export type S_E_Map_Data_Config_Party_Allocation_area_Properties = {
  areaId: S_E_Map_Data_Area_Id;
  pct: number;
  color?: string;
};

export type S_E_Map_Data_Config_Blank = {
  mapVariant: "blank";
  color?: string;
  inputRange: [number, number];
};

//------------------------------------------------------------

export type S_E_Figure_Data = {
  type: "figure";
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
  type: "text";
  font: string;
  text: string;
  fontSize: number;
  maxWidth: number;
  textAlign: "center" | "left" | "right";
  color: string;
  isResponsive?: boolean;
  rotation: [number, number, number];
  position: [number, number, number];
};

//------------------------------------------------------------

export type S_E_Number_Data = {
  type: "number";
  font: string;
  unit: string;
  motion: S_E_Number_Data_Motion;
  decimals: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
};

export type S_E_Number_Data_Motion = {
  position: Motion<Vector3Tuple>;
  color: Motion<string>;
  value: Motion<number>;
  size: Motion<number>;
};

//------------------------------------------------------------

export type S_E_Data = S_E_Map_Data | S_E_Number_Data | S_E_Text_Data | S_E_Box_Data | S_E_Figure_Data;
