import type { C_C_S_Element_Map_Area_Id, Party_Letter } from "@models";

export type Election_Result_Area = {
  id: C_C_S_Element_Map_Area_Id;
  partier: Election_Result_Area_Party[];
};

export type Election_Result_Area_Party = {
  letter: Party_Letter;
  pct: number;
  pct_pm: number;
};

export type Election_Result_Party_Overview = {
  partyLetter: Party_Letter;
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
