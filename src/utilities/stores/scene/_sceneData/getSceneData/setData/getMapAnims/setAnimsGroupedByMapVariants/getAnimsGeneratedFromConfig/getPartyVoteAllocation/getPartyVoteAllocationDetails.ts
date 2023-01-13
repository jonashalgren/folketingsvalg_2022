import { getPartyFromAreaParties, getParty, pipe } from "@helpers";
import type { ER, ER_Year, P, P_Letter, S_Map_Area_Id } from "@models";
import { interpolate } from "popmotion";

export const getPartyVoteAllocationDetails = pipe(setListPercentage, setListPercentagePoles, setListColor);

type Props = {
  totalVotes: number;
  electionResult: ER;
  partyLetter: P_Letter;
  highestPercentage: number;
  lowestPercentage: number;
  year: ER_Year;
  list: {
    areaId: S_Map_Area_Id;
    percentage: number;
    party: P;
    color: string;
  }[];
};

function setListPercentage(item: Props) {
  return {
    ...item,
    list: item.electionResult.map((entry) => {
      const party = getPartyFromAreaParties({
        areaParties: entry.partier,
        partyLetter: item.partyLetter,
      });
      const percentage = item.year === "2022" ? party.pct : party.pct - party.pct_pm;

      return {
        areaId: entry.id,
        percentage: percentage / 3,
        color: "",
      };
    }),
  };
}

function setListPercentagePoles(item: Props): Props {
  return {
    ...item,
    highestPercentage: Math.max(...item.list.flatMap((item) => item.percentage)),
    lowestPercentage: Math.min(...item.list.flatMap((item) => item.percentage)),
  };
}

function setListColor(item: Props) {
  const party = getParty({ partyLetter: item.partyLetter });
  return {
    ...item,
    list: item.list.map((entry) => {
      return {
        ...entry,
        color: interpolate(
          [item.lowestPercentage, item.highestPercentage],
          [party.secondaryColor, party.color]
        )(entry.percentage),
      };
    }),
  };
}
