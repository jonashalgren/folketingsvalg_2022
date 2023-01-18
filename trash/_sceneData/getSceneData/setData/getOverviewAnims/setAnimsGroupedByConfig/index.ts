import { getAnimFromConfig } from "./getAnimFromConfig";
import type { Props } from "../index";

export function setAnimsGroupedByConfig(item: Props) {
  return {
    ...item,
    animsGroupedByOverviewConfig: item.animConfigs.map((config) => {
      return Object.values(item.partyCollection).map((party) => {
        return getAnimFromConfig({ config, party });
      });
    }),
  };
}
