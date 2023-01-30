import type { Party_Letter } from "@models";
import { partyCollection } from "@assets";

type Props = {
  partyLetter: Party_Letter;
};

export function getParty({ partyLetter }: Props) {
  return Object.values(partyCollection).find((item) => item.partyLetter === partyLetter);
}
