export * from "./partyLogoMesh";
export * from "./partyLeaderMesh";

export type Party = {
  color: string;
  secondaryColor: string;
  shortName: string;
  partyLetter: Party_Letter;
  name: string;
  logo: string;
  leader: string;
  stemmer_1994: number;
  procent_af_stemmer_1994: number;
  mandater_1994: number;
  stemmer_1998: number;
  procent_af_stemmer_1998: number;
  mandater_1998: number;
  stemmer_2001: number;
  procent_af_stemmer_2001: number;
  mandater_2001: number;
  stemmer_2005: number;
  procent_af_stemmer_2005: number;
  mandater_2005: number;
  stemmer_2007: number;
  procent_af_stemmer_2007: number;
  mandater_2007: number;
  stemmer_2011: number;
  procent_af_stemmer_2011: number;
  mandater_2011: number;
  stemmer_2015: number;
  procent_af_stemmer_2015: number;
  mandater_2015: number;
  stemmer_2019: number;
  procent_af_stemmer_2019: number;
  mandater_2019: number;
  stemmer_2022: number;
  procent_af_stemmer_2022: number;
  mandater_2022: number;
};

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
