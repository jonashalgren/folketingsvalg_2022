import { pipe } from "@helpers";
import type { S_E_Part, S_Anims_Mappers, S_E_Part_Item } from "@models";
import type { Group } from "three";
import { setMapper } from "./setMapper";
import { setProperties } from "./setProperties";
import { setParts } from "./setParts";

export type Props = {
  part: S_E_Part[];
  group: Group;
  partProperties: Group;
  properties?: {
    itemsPrRow: number;
    itemHeight: number;
    itemWidth: number;
    scale: number;
    rows: number;
    amount: number;
    items: S_E_Part_Item[];
    group: Group;
    offsetX: number;
    offsetY: number;
    inputRange: [number, number];
    parts: {
      group: Group;
      inputRanges: [number, number][];
    }[];
  }[];

  mapper?: ({ progress }: S_Anims_Mappers) => void;
};

export const getPartMapper = pipe(setProperties, setParts, setMapper);
