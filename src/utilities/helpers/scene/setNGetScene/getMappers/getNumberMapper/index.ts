import type { Group } from "three";
import type { S, S_Anims_Mappers, Mesh_Text } from "@models";
import { pipe } from "@helpers";
import { setProperties } from "./setProperties";
import { setMapper } from "./setMapper";

export type Props = {
  group: Group;
  data: S;
  mapper?: ({ progress }: S_Anims_Mappers) => void;
  properties?: {
    number: Mesh_Text;
    decimals: number;
    unit: string;
    valueMapper: (val: number) => number;
    colorMapper: (val: number) => string;
    positionMapper: (val: number) => [number, number, number];
    fontSizeMapper: (val: number) => number;
  }[];
};

export const getNumberMapper = pipe(setProperties, setMapper);
