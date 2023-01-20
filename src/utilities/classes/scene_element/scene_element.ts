import type { S_E_Mesh, S_E_Meshes, S_E_Data } from "@models";

export class Scene_Element<D extends S_E_Data, M extends S_E_Meshes> {
  animate: (progress: number) => void;
  copiedMeshes: M;
  meshes: M;
  constructor(public data: D, public originalMeshes: M) {
    this.animate = function () {};
    this.data = data;
    this.meshes = <M>[];
    this.copiedMeshes = originalMeshes.map(<T extends S_E_Mesh>(item: T) => {
      const clone = <T>item.clone();
      clone.userData = item.userData;
      clone.geometry = clone.geometry.clone() as any;

      if (Array.isArray(clone.material)) {
        clone.material = clone.material.map((item) => item.clone());
      } else {
        clone.material = clone.material.clone();
      }

      return clone;
    }) as M;
  }
}
