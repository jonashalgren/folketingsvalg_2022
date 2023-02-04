import type { Props } from "./index";
import { getIsArraysMatching } from "@helpers";

export function setter(item: Props): Props {
  const currentOffsets = item.currentOffsets.flatMap((item) => [item.top, item.bottom]);
  const newOffsets = item.newOffsets.flatMap((item) => [item.top, item.bottom]);
  if (!getIsArraysMatching({ arr1: currentOffsets, arr2: newOffsets })) {
    item.set(item.newOffsets);
  }
  return item;
}
