import type { Props } from "./index";

export function setBoundingBox(item: Props): Props {
  return {
    ...item,
    data: {
      ...item.data,
      boundingBox: item.data.boundingBox ?? { x: 100, y: 100 },
    },
  };
}
