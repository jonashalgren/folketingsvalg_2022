import type {
  P_Leader_Mesh,
  P_Logo_Mesh,
  S_E_Number,
  S_E_Map,
  S_E_LineChart,
  S_E_BarChart,
  S_E_Part,
  S_E_Text,
} from "@models";

export type S_Originals = {
  original_images: P_Leader_Mesh[];
  original_logo: P_Logo_Mesh[];
  original_text: S_E_Text[];
  original_figure: S_E_Part;
  original_number: S_E_Number;
  original_map: S_E_Map;
  original_lineChart: S_E_LineChart;
  original_barChart: S_E_BarChart;
};
