import { pipe } from "@helpers";
import { setBars } from "./setBars";
import { setBarProperties } from "./setBarProperties";
import type { S_BarChart_Properties, P_Logo_Mesh } from "@models";

export type Props = {
  partyLogoMesh: P_Logo_Mesh[];
  overviewProperties?: S_BarChart_Properties;
};

export const getSceneOverviewProperties = pipe(setBarProperties, setBars);
