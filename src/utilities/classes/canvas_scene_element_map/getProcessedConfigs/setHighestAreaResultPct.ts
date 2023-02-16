import type { Props } from ".";

export function setHighestAreaResultPct(item: Props): Props {
  return {
    ...item,
    elementSettings: {
      ...item.elementSettings,
      configs: item.elementSettings.configs.map((config) => {
        if (config.mapVariant === "party_vote_allocation") {
          return {
            ...config,
            highestAreaResultPct: Math.max(...config.areasProperties.flatMap((item) => item.pct)),
          };
        }

        return config;
      }),
    },
  };
}
