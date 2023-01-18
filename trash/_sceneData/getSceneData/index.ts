import { setData } from "./setData";
import { pipe } from "@helpers";
import type { S, ER, S_E_Map_Area_Id } from "@models";

export type Props = {
  sceneData: S[];
  electionResult: ER;
  mapAreaIds: S_E_Map_Area_Id[];
};

export const getSceneData = pipe(setData);
