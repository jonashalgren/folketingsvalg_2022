import type { S_Line_Properties } from "@models";

export type S_Line_Anim_Mapper_Properties = {
  valueMapper: (progress: number) => number;
} & S_Line_Properties;
