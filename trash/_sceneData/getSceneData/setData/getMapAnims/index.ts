import { pipe } from "@helpers";
import type { ER } from "@models";
import { setAnimsGroupedByMapVariants } from "./setAnimsGroupedByMapVariants";
import { setChainedAnims } from "./setChainedAnims";
import { setAnimsGroupedByMapAreas } from "./setAnimsGroupedByMapAreas";

import type { S_Map_Anim_Config, S_Map_Anim } from "@models";

export type Props = {
  animConfigs: S_Map_Anim_Config[];
  electionResult: ER;
  animsGroupedByMapVariants: S_Map_Anim[][];
  animsGroupedByMapAreas: S_Map_Anim[][];
  anims: S_Map_Anim[];
};

export const getMapAnims = pipe(setAnimsGroupedByMapVariants, setAnimsGroupedByMapAreas, setChainedAnims);
