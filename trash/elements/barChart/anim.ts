import type { Motion, P_Letter } from "@models";

export type S_BarChart_Anim = {
  partyLetter: P_Letter;
  value: Motion<number>;
  progression: Motion<number>;
};
