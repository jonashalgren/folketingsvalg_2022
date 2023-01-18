import { pipe } from "@helpers";
import { setAnimsGroupedByPartyLetter } from "./setAnimsGroupedByPartyLetter";
import { setAnimsGroupedByConfig } from "./setAnimsGroupedByConfig";
import { setChainedAnims } from "./setChainedAnims";
import type { P_Collection, S_Overview_Anim, S_Overview_Anim_Config } from "@models";

export type Props = {
  partyCollection: P_Collection;
  animConfigs: S_Overview_Anim_Config[];
  animsGroupedByOverviewConfig: S_Overview_Anim[][];
  animsGroupedByOverviewPartyLetter: S_Overview_Anim[][];
  anims: S_Overview_Anim[];
};

export const getOverviewAnims = pipe(setAnimsGroupedByConfig, setAnimsGroupedByPartyLetter, setChainedAnims);
