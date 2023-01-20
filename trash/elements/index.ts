export * from "./lineChart";
export * from "./map";
export * from "./number";
export * from "./barChart";
export * from "./image";
export * from "./logo";
export * from "./part";
export * from "./text";

import type {
  S_E_LineChart,
  S_E_Map,
  S_E_Number,
  S_E_BarChart,
  S_E_Part,
  S_E_Image,
  S_E_Logo,
  S_E_Text,
} from "@models";

export type S_E_Data = {
  map?: S_E_Map;
  numbers?: S_E_Number[];
  texts?: S_E_Text[];
  logos?: S_E_Logo[];
  images?: S_E_Image[];
  parts?: S_E_Part[];
  barChart?: S_E_BarChart;
  lineChart?: S_E_LineChart;
};
