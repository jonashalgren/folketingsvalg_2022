import type { Election_Result_Party_Overview } from "@models";

export type Party = {
  partyLetter: Party_Letter;
  color: string;
  secondaryColor: string;
  shortName: string;
  name: string;
  logo: string;
  leader: string;
} & Election_Result_Party_Overview;

export type Party_Letter = "A" | "C" | "Æ" | "V" | "F" | "Ø" | "B" | "D" | "I" | "M" | "O" | "Å" | "K" | "Q";

export type Party_Collection = {
  A: Party;
  C: Party;
  Æ: Party;
  V: Party;
  F: Party;
  Ø: Party;
  B: Party;
  D: Party;
  I: Party;
  M: Party;
  O: Party;
  Å: Party;
  K: Party;
  Q: Party;
};
