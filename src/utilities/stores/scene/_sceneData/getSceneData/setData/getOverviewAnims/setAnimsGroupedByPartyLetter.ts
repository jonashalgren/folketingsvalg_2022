import type { Props } from "./index";

export function setAnimsGroupedByPartyLetter(item: Props) {
  return {
    ...item,
    animsGroupedByOverviewPartyLetter: Object.values(item.partyCollection).map((party) => {
      return item.animsGroupedByOverviewConfig
        .flatMap((item) => item)
        .filter((item) => item.partyLetter === party.letter);
    }),
  };
}
