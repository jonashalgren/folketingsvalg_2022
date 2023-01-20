import type { S_E_Map_Properties_Area_Party, S_E_Map_Properties_Area } from "@models";

export type S_Map_Anim_Mapper_Properties = {
  valueMapper: (progress: number) => number;
  colorMapper: (progress: number) => string;
  partyMapper: (progress: number) => S_E_Map_Properties_Area_Party;
} & S_E_Map_Properties_Area;
