import type { ER_Area_Party, P_Letter } from "@models";

type Props = {
  partyLetter: P_Letter;
  areaParties: ER_Area_Party[];
};

export function getPartyFromAreaParties({ partyLetter, areaParties }: Props) {
  return areaParties.find(({ letter }) => partyLetter === letter);
}
