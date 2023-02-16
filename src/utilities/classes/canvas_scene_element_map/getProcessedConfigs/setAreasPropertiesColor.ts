import type { Props } from ".";
import { mesh_static_settings } from "@assets";
import { getParty } from "@helpers";
import { interpolate } from "popmotion";

export function setAreasPropertiesColor(item: Props): Props {
  return {
    ...item,
    elementSettings: {
      ...item.elementSettings,
      configs: item.elementSettings.configs.map((config) => {
        if (config.mapVariant === "party_vote_allocation") {
          const party = getParty({ partyLetter: config.partyLetter });
          return {
            ...config,
            areasProperties: config.areasProperties.map((item) => {
              return {
                ...item,
                color: interpolate([config.lowestAreaResultPct, config.highestAreaResultPct], [party.secondaryColor, party.color])(item.pct),
              };
            }),
          };
        }

        return {
          ...config,
          areaColor: mesh_static_settings.color_neutral,
        };
      }),
    },
  };
}