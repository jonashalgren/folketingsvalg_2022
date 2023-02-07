import type { Props } from ".";
import type { C_S_S_E_Map_Config, Election_Result_Area_Party } from "@models";

export function setAreasPropertiesPct(item: Props): Props {
  return {
    ...item,
    configs: <C_S_S_E_Map_Config[]>item.configs.map((config) => {
      if (config.mapVariant === "party_vote_allocation") {
        return {
          ...config,
          areasProperties: item.electionResult.map((item) => {
            const { pct, pct_pm } = item.partier.find((entry: Election_Result_Area_Party) => entry.letter === config.partyLetter);
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
