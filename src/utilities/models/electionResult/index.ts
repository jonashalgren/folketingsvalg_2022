import type { S_S_E_Map_Area_Id, Party_Letter } from "@models";

export type ElectionResult_Area = {
  id: S_S_E_Map_Area_Id;
  partier: ElectionResult_Area_Party[];
};

export type ElectionResult_Area_Party = {
  letter: Party_Letter;
  pct: number;
  pct_pm: number;
};
