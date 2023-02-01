import type { Props } from ".";
import type { S_E_Map_Data_Config } from "@models";

export function setAreasPropertiesPct(item: Props): Props {
  return {
    ...item,
    configs: <S_E_Map_Data_Config[]>item.configs.map((config) => {
      if (config.mapVariant === "party_vote_allocation") {
        return {
          ...config,
          areasProperties: item.electionResult.map((item) => {
            const { pct, pct_pm } = item.partier.find((entry) => entry.letter === config.partyLetter);
            return {
              areaId: item.id,
              pct: config.year === "2022" ? pct : pct - pct_pm,
            };
          }),
        };
      }

      return config;
    }),
  };
}
