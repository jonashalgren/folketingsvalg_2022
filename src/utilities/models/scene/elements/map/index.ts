export * from "./areaId";
export * from "./anim";
export * from "./animConfig";
export * from "./properties";
export * from "./animMapperProperties";
export * from "./mesh";

import type { S_E_Map_Anim_Config, S_E_Map_Area_Id } from "@models";

export type S_E_Map = {
  animConfigs: S_E_Map_Anim_Config[];
  focus?: S_E_Map_Focus[];
};

export type S_E_Map_Focus = {
  inputRange: [number, number];
  areas: S_E_Map_Area_Id[];
};
