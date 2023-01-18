import { pipe } from "@helpers";
import { setValues } from "./setValues";
import { setProperties } from "./setProperties";
import type { S_Line_Anim, S_Line } from "@models";

export type Props = {
  data: S_Line;
  anims: S_Line_Anim[];
  properties?: {
    topValue: number;
    bottomValue: number;
    width: number;
    steps: number;
  };
};

export const getLineAnims = pipe(setProperties, setValues);
