import { getRect } from "./getRect";
import { getLogo } from "./getLogo";
import { getText } from "./getText";
import { getPartyText } from "./getPartyText";
import { getMiniText } from "./getMiniText";
import type { Props } from "../index";

export function setBars(item: Props) {
  const { fullHeight, rowHeight } = item.overviewProperties;
  return {
    ...item,
    overviewProperties: {
      ...item.overviewProperties,
      bars: item.partyLogoMesh.map((entry, index) => {
        const y = -(fullHeight / 2) + (item.partyLogoMesh.length - 1 - index) * rowHeight;
        const rect = getRect({ party: entry, y, overviewProperties: item.overviewProperties });
        const logo = getLogo({ party: entry, y, overviewProperties: item.overviewProperties });
        const text = getText({ party: entry, y, overviewProperties: item.overviewProperties });
        const partyText = getPartyText({ party: entry, y, overviewProperties: item.overviewProperties });
        const miniText = getMiniText({ party: entry, y, overviewProperties: item.overviewProperties });
        return {
          partyLetter: entry.letter,
          logo,
          rect,
          text,
          partyText,
          miniText,
        };
      }),
    },
  };
}
