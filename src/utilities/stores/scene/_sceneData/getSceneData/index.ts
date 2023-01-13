import { setData } from "./setData";
import { setTransition } from "./setTransition";
import { pipe } from "@helpers";
import type { S, ER, S_Map_Area_Id } from "@models";

export type Props = {
  sceneData: S[];
  electionResult: ER;
  mapAreaIds: S_Map_Area_Id[];
};

export const getSceneData = pipe(setTransition, setData);
