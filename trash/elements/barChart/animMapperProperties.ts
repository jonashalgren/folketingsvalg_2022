import type { S_BarChart_Properties_Bar } from "@models";

export type S_BarChart_Anim_Mapper_Properties = {
  valueMapper: (progress: number) => number;
  progressionMapper: (progress: number) => number;
} & S_BarChart_Properties_Bar;
