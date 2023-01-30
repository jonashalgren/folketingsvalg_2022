import type { Color, Group } from "three";
import type { Party_Letter } from "@models";

export type P_Leader_Mesh = {
  letter: Party_Letter;
  color: Color;
  group: Group;
};
