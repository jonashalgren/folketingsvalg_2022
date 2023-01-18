import type { Props } from "../index";

export function setData(item: Props) {
  return {
    ...item,
    sceneData: item.sceneData,
  };
}
