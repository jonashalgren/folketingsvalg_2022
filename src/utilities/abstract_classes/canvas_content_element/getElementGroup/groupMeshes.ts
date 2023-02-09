import type { Props } from "./index";
import { Group } from "three";

export function groupMeshes(item: Props) {
  const group = new Group();

  if (item?.meshesTemplate?.length > 0) {
    group.add(...item.meshesTemplate);
  }

  return {
    ...item,
    group,
  };
}
