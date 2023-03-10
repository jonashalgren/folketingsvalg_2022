import type { Props } from "./index";
import { interpolate } from "popmotion";

export function setMapperProgressMain(item: Props): Props {
  const { mainEnd, mainStart } = item.settings;
  return {
    ...item,
    mapperProgressMain: interpolate([mainStart, mainEnd], [0, 1]),
  };
}
