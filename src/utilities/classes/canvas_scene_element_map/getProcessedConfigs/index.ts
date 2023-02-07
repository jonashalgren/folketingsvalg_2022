import { pipe } from "@helpers";
import type { C_S_S_E_Map_Config, Election_Result_Area } from "@models";
import { setAreasPropertiesPct } from "./setAreasPropertiesPct";
import { setHighestAreaResultPct } from "./setHighestAreaResultPct";
import { setLowestAreaResultPct } from "./setLowestAreaResultPct";
import { setAreasPropertiesColor } from "./setAreasPropertiesColor";

export type Props = {
  configs: C_S_S_E_Map_Config[];
  electionResult: Election_Result_Area[];
};

export const getProcessedConfigs = pipe(setAreasPropertiesPct, setLowestAreaResultPct, setHighestAreaResultPct, setAreasPropertiesColor);
