export * from "./animConfig";
export * from "./anim";
export * from "./properties";
export * from "./animMapperProperties";

import type { S_Line_Anim, S_Line_Anim_Config } from "@models";

export type S_E_LineChart = {
  lineWidth?: number;
  topValue?: number;
  bottomValue?: number;
  yAxisTop?: number;
  yAxisBottom?: number;
  width?: number;
  xLabels: string[];
  anims?: S_Line_Anim[];
  animConfigs: S_Line_Anim_Config[];
  unit?: string;
  decimals?: number;
};
