import type { Party_Letter, Motion } from "@models";
import type { Vector3Tuple } from "three";
import type { S_S_E_Map_Area_Id } from "./mapAreaId";
export * from "./mapAreaId";

//------------------------------------------------------------

export type S_S_E_Box = {
  type: "box";
  texture?: S_S_E_Box_Texture;
  partyLetter: Party_Letter;
  size: number;
  isFloating?: boolean;
  rotation?: [number, number, number];
  motion: S_S_E_Box_Motion;
};

export type S_S_E_Box_Motion = {
  inputRange: number[];
  outputRange: {
    position?: [number, number, number][];
    scale?: [number, number, number][];
  };
};

export type S_S_E_Box_Texture = "logo" | "leader";

//------------------------------------------------------------

export type S_S_E_Map = {
  type: "map";
  configs: S_S_E_Map_Config[];
  focus?: S_S_E_Map_Focus[];
};

export type S_S_E_Map_Focus = {
  inputRange: [number, number];
  areas: S_S_E_Map_Area_Id[];
};

export type S_S_E_Map_Year = "2019" | "2022";

export type S_S_E_Map_Config = S_S_E_Map_Config_Party_Allocation | S_S_E_Map_Config_Blank;

export type S_S_E_Map_Config_Party_Allocation = {
  mapVariant: "party_vote_allocation";
  year: S_S_E_Map_Year;
  partyLetter: Party_Letter;
  inputRange: [number, number];
  areasProperties?: S_S_E_Map_Config_Party_Allocation_area_Properties[];
  highestAreaResultPct?: number;
  lowestAreaResultPct?: number;
};
export type S_S_E_Map_Config_Party_Allocation_area_Properties = {
  areaId: S_S_E_Map_Area_Id;
  pct: number;
  color?: string;
};

export type S_S_E_Map_Config_Blank = {
  mapVariant: "blank";
  color?: string;
  inputRange: [number, number];
};

//------------------------------------------------------------

export type S_S_E_Figure = {
  type: "figure";
  inputRange: [number, number];
  amount: number;
  color: string;
  rows: number;
  width: number;
  items: S_S_E_Figure_Item[];
};

export type S_S_E_Figure_Item = {
  inputRange: [number, number];
  disabled: number;
};

//------------------------------------------------------------

export type S_S_E_Text = {
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

export type S_S_E_Number = {
  type: "number";
  font: string;
  unit: string;
  motion: S_S_E_Number_Motion;
  decimals: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
};

export type S_S_E_Number_Motion = {
  position: Motion<Vector3Tuple>;
  color: Motion<string>;
  value: Motion<number>;
  size: Motion<number>;
};

//------------------------------------------------------------

export type S_S_Element = S_S_E_Map | S_S_E_Number | S_S_E_Text | S_S_E_Box | S_S_E_Figure;
