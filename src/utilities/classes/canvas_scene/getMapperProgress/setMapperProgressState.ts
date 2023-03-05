import type { Props } from "./index";
import { interpolate } from "popmotion";
import type { C_Scene_Progress_State } from "@models";

export function setMapperProgressState(item: Props): Props {
  const { entryStart, exitEnd, mainStart } = item.settings;
  const endValue = item.isLastScene ? "active" : "inactive";
  return {
    ...item,
    mapperProgressState: interpolate<C_Scene_Progress_State>(
      [-1, entryStart, entryStart, mainStart, mainStart, exitEnd, exitEnd, Infinity],
      ["inactive", "inactive", "next", "next", "active", "active", endValue, endValue]
    ),
  };
}
