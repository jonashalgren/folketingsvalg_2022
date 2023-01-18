import type { ER, S_Map_Anim_Config } from "@models";
import { getBlank } from "./getBlank";
import { getPartyVoteAllocation } from "./getPartyVoteAllocation";

type Props = {
  electionResult: ER;
  animConfig: S_Map_Anim_Config;
};
export function getAnimsGeneratedFromConfig({ animConfig, electionResult }: Props) {
  const { mapVariant } = animConfig;
  if (mapVariant === "party_vote_allocation") {
    return getPartyVoteAllocation({ electionResult, animConfig });
  } else if (mapVariant === "blank") {
    return getBlank({ animConfig, electionResult });
  } else {
    return [];
  }
}
