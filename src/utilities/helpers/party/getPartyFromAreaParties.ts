import type { ElectionResult_Area_Party, Party_Letter } from "@models";

type Props = {
  partyLetter: Party_Letter;
  areaParties: ElectionResult_Area_Party[];
};

export function getPartyFromAreaParties({ partyLetter, areaParties }: Props) {
  return areaParties.find(({ letter }) => partyLetter === letter);
}
