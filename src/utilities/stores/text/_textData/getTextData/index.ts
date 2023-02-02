import { pipe } from "@helpers";
import { fitScene } from "./fitScene";
import { setTextData } from "./setTextData";
import { cleanupData } from "./cleanupData";
import type { S_Settings } from "@models";

export type Props = {
  scenesSettings: S_Settings[];
  textData: string[][];
  data: any[];
};
export const getTextData = pipe(cleanupData, setTextData, fitScene);
