import type { Props } from ".";
import type { S_S_E_Map_Config } from "@models";
import { mesh_default_settings } from "@assets";
import { getParty } from "@helpers";
import { interpolate } from "popmotion";

export function setAreasPropertiesColor(item: Props): Props {
  return {
    ...item,
    configs: <S_S_E_Map_Config[]>item.configs.map((config) => {
      if (config.mapVariant === "party_vote_allocation") {
        const party = getParty({ partyLetter: config.partyLetter });
        return {
          ...config,
          areasProperties: config.areasProperties.map((item) => {
            return {
              ...item,
              color: interpolate(
                [config.lowestAreaResultPct, config.highestAreaResultPct],
                [party.secondaryColor, party.color]
              )(item.pct),
            };
          }),
        };
      }

      return {
        ...config,
        areaColor: mesh_default_settings.color_neutral,
      };
    }),
  };
}
