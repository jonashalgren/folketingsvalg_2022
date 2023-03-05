import type { Props } from "./index";
import { interpolate } from "popmotion";

export function setMapperProgressTransition(item: Props): Props {
  const { entryStart, exitEnd, mainEnd, mainStart } = item.settings;
  return {
    ...item,
    mapperProgressEntry: interpolate([entryStart, mainStart], [0, 1]),
    mapperProgressExit: interpolate([mainEnd, exitEnd], [0, 1]),
  };
}
