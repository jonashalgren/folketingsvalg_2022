import type { Props } from "./index";
import { interpolate } from "popmotion";
import type { C_S_Progress_State } from "@models";

export function setMapperProgressState(item: Props): Props {
  const { entryStart, exitEnd, mainStart } = item.sceneSettings.progressSettings;

  return {
    ...item,
    mapperProgressState: interpolate<C_S_Progress_State>(
      [-1, entryStart, entryStart, mainStart, mainStart, exitEnd, exitEnd, Infinity],
      ["inactive", "inactive", "next", "next", "active", "active", "inactive", "inactive"]
    ),
  };
}
