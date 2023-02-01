import type { Props } from ".";
import type { S_E_Map_Data_Config } from "@models";

export function setLowestAreaResultPct(item: Props): Props {
  return {
    ...item,
    configs: <S_E_Map_Data_Config[]>item.configs.map((config) => {
      if (config.mapVariant === "party_vote_allocation") {
        return {
          ...config,
          lowestAreaResultPct: Math.min(...config.areasProperties.flatMap((item) => item.pct)),
        };
      }

      return config;
    }),
  };
}
