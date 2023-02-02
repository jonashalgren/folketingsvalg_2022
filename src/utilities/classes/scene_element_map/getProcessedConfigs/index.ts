import { pipe } from "@helpers";
import type { S_S_E_Map_Config, ElectionResult_Area } from "@models";
import { setAreasPropertiesPct } from "./setAreasPropertiesPct";
import { setHighestAreaResultPct } from "./setHighestAreaResultPct";
import { setLowestAreaResultPct } from "./setLowestAreaResultPct";
import { setAreasPropertiesColor } from "./setAreasPropertiesColor";

export type Props = {
  configs: S_S_E_Map_Config[];
  electionResult: ElectionResult_Area[];
};

export const getProcessedConfigs = pipe(
  setAreasPropertiesPct,
  setLowestAreaResultPct,
  setHighestAreaResultPct,
  setAreasPropertiesColor
);
