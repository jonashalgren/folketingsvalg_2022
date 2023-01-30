import type { Props } from "./index";

export function setMotions(item: Props) {
  return {
    ...item,
    motions: item.areaIds.map((item) => item),
  };
}
