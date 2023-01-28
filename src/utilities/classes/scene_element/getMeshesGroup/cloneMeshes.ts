import type { S_E_Mesh } from "@models";
import type { Props } from "./index";

export function cloneMeshes(item: Props) {
  return {
    ...item,
    meshes: item.meshes.map((item: S_E_Mesh) => {
      const clone = item.clone();
      clone.userData = item.userData;
      clone.geometry = clone.geometry.clone() as any;

      if (Array.isArray(clone.material)) {
        clone.material = clone.material.map((item) => item.clone());
      } else {
        clone.material = clone.material.clone();
      }

      return clone;
    }),
  };
}
