import type { ER_Year } from "@models";

export type S_BarChart_Anim_Config = S_BarChart_Anim_Config_Normal | S_BarChart_Anim_Config_Blank;

export type S_BarChart_Anim_Config_Normal = {
  variant: "normal";
  year: ER_Year;
  inputRange: [number, number];
};

export type S_BarChart_Anim_Config_Blank = {
  variant: "blank";
  inputRange: [number, number];
};
