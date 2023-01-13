export * from "./properties";
export * from "./animConfig";
export * from "./anim";
export * from "./animMapperProperties";

import type { S_BarChart_Anim_Config, S_BarChart_Properties, S_BarChart_Anim } from "@models";

export type S_E_BarChart = {
  anims?: S_BarChart_Anim[];
  animConfigs: S_BarChart_Anim_Config[];
  overviewProperties?: S_BarChart_Properties;
};
