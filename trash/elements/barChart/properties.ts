import type { Mesh_Box, P_Letter, Mesh_Text } from "@models";
import type { Group } from "three";

export type S_BarChart_Properties_Bar = {
  partyLetter: P_Letter;
  logo: Group;
  rect: Mesh_Box;
  text: Mesh_Text;
  partyText: Mesh_Text;
  miniText: Mesh_Text;
};

export type S_BarChart_Properties = {
  rowHeight: number;
  barHeight: number;
  fullHeight: number;
  barWidth: number;
  bars: S_BarChart_Properties_Bar[];
};
