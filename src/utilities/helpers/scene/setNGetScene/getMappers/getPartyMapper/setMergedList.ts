import { _isAnimating } from "@stores";
import type { Props } from "./index";
import type { S_Party_Item } from "@models";

export function setMergedList(item: Props): Props {
  const partyLogos = item.data?.partyLogo ?? [];
  const partyLeader = item.data?.partyLeader ?? [];

  const logos: S_Party_Item[] = partyLogos.map((item) => {
    return {
      ...item,
      variant: "logo",
    };
  });
  const leaders: S_Party_Item[] = partyLeader.map((item) => {
    return {
      ...item,
      variant: "leader",
    };
  });
  return {
    ...item,
    mergedList: [...logos, ...leaders],
  };
}
