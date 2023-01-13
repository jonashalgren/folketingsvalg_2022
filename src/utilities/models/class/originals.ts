import type {
  P_Leader_Mesh,
  P_Logo_Mesh,
  S_Number_Properties,
  S_E_Map_Properties,
  S_BarChart_Properties,
  S_Line_Properties,
} from "@models";
import type { Group } from "three";

export type S_Original_Blocks = {
  image: P_Leader_Mesh[];
  logo: P_Logo_Mesh[];
  figure: Group;
  number: S_Number_Properties;
  map: S_E_Map_Properties;
  lineChart: S_Line_Properties;
  barChart: S_BarChart_Properties;
};
