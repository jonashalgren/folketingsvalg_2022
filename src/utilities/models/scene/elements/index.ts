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

export type S_Elements = {
  map?: S_E_Map;
  number?: S_E_Number[];
  text?: S_E_Text[];
  logo?: S_E_Logo[];
  image?: S_E_Image[];
  part?: S_E_Part[];
  barChart?: S_E_BarChart;
  lineChart?: S_E_LineChart;
};
