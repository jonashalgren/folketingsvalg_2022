import type { P_Letter } from "@models";

export type S_E_Image = {
  partyLetter: P_Letter;
  inputRange: number[];
  positionRange: [number, number, number][];
  scaleRange?: [number, number, number][];
  rotation?: [number, number, number];
  size?: number;
};
