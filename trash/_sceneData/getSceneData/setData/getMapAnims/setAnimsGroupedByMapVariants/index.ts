import { getAnimsGeneratedFromConfig } from "./getAnimsGeneratedFromConfig";
import type { Props } from "../index";

export function setAnimsGroupedByMapVariants(item: Props) {
  return {
    ...item,
    animsGroupedByMapVariants: item.animConfigs.map((animConfig) => {
      return getAnimsGeneratedFromConfig({
        animConfig,
        electionResult: item.electionResult,
      });
    }),
  };
}
