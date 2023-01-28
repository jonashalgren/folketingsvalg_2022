import { Group } from "three";
import type { Props } from "./index";

export function groupMeshes(item: Props) {
  return {
    ...item,
    group: new Group().add(...item.meshes),
  };
}
