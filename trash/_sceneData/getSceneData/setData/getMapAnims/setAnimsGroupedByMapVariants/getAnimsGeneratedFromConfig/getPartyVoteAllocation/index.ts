import { getPartyVoteAllocationDetails } from "./getPartyVoteAllocationDetails";
import type { ER, S_Map_Anim_Config_Party_Allocation, S_Map_Anim } from "@models";
import { threeProperties } from "@assets";
type Props = {
  electionResult: ER;
  animConfig: S_Map_Anim_Config_Party_Allocation;
};

export function getPartyVoteAllocation({ electionResult, animConfig }: Props): S_Map_Anim[] {
  const { list } = getPartyVoteAllocationDetails({
    electionResult,
    partyLetter: animConfig.partyLetter,
    year: animConfig.year,
    list: [],
    highestPercentage: 0,
    lowestPercentage: 0,
    totalVotes: 0,
  });

  return list.map(({ areaId, percentage, color }) => {
    return {
      areaId,
      value: {
        inputRange: animConfig.inputRange,
        outputRange: [percentage / threeProperties.pDivider, percentage / threeProperties.pDivider],
      },
      color: {
        inputRange: animConfig.inputRange,
        outputRange: [color, color],
      },
      party: {
        inputRange: animConfig.inputRange,
        outputRange: [animConfig.partyLetter, animConfig.partyLetter],
      },
    };
  });
}
