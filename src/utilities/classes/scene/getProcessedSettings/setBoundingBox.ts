import type { Props } from "./index";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    settings: {
      ...item.settings,
      boundingBox: item.settings.boundingBox ?? { x: 100, y: 100 },
    },
  };
}
