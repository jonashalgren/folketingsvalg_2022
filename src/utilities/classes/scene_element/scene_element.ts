import type { S_E_Mesh, S_E_Meshes, S_E_Data } from "@models";

export class Scene_Element<Data extends S_E_Data, Meshes extends S_E_Meshes> {
  animate: (progress: number) => void;

  constructor(public data: Data, public meshes: Meshes) {
    this.animate = function () {};
    this.meshes = meshes.map((item: S_E_Mesh) => {
      const clone = item.clone();
      clone.userData = item.userData;

      if (Array.isArray(item.material)) {
        clone.material = item.material.map((item) => item.clone());
      } else {
        clone.material = item.material.clone();
      }

      clone.geometry.copy(item.geometry);
      return clone;
    }) as Meshes;
    this.data = data;
  }
}
