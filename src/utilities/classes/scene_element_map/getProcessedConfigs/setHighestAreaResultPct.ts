import type { Props } from ".";
import type { S_S_E_Map_Config } from "@models";

export function setHighestAreaResultPct(item: Props): Props {
  return {
    ...item,
    configs: <S_S_E_Map_Config[]>item.configs.map((config) => {
      if (config.mapVariant === "party_vote_allocation") {
        return {
          ...config,
          highestAreaResultPct: Math.max(...config.areasProperties.flatMap((item) => item.pct)),
        };
      }

      return config;
    }),
  };
}
