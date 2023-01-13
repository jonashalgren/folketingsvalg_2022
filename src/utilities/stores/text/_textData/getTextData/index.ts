import { pipe } from "@helpers";
import { fitScene } from "./fitScene";
import { setTextData } from "./setTextData";
import { cleanupData } from "./cleanupData";
import type { S } from "@models";

export type Props = {
  scenes: S[];
  textData: string[][];
  data: any[];
};
export const getTextData = pipe(cleanupData, setTextData, fitScene);
