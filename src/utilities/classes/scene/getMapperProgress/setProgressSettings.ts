import { _scrollY } from "@stores";
import type { Props } from "./index";

export function setProgressSettings(item: Props): Props {
  const { bottom, lastEnd, nextTop, top } = item.contentSectionOffsets;
  return {
    ...item,
    progressSettings: {
      mainStart: top,
      mainEnd: bottom,
      entryStart: top === 0 ? top : Math.round(lastEnd),
      exitEnd: Math.round((bottom + nextTop) / 2),
    },
  };
}
