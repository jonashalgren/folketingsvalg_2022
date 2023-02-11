import type { Props } from ".";

export function setLowestAreaResultPct(item: Props): Props {
  return {
    ...item,
    elementSettings: {
      ...item.elementSettings,
      configs: item.elementSettings.configs.map((config) => {
        if (config.mapVariant === "party_vote_allocation") {
          return {
            ...config,
            lowestAreaResultPct: Math.min(...config.areasProperties.flatMap((item) => item.pct)),
          };
        }

        return config;
      }),
    },
  };
}
