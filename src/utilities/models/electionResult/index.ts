import type { S_Map_Area_Id, P_Letter } from "@models";

export type ER_Fetch = {
  areaId: S_Map_Area_Id;
  parties: {
    letter: P_Letter;
    votes: number;
  }[];
}[];

export type ER_Year = "2019" | "2022";

export type ER = ER_Area[];

export type ER_Area = {
  id: S_Map_Area_Id;
  partier: ER_Area_Party[];
};

export type ER_Area_Party = {
  letter: P_Letter;
  pct: number;
  pct_pm: number;
};
