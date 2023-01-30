import type { S_E_Mesh, S_E_Data, S_Progress } from "@models";
import type { Group } from "three";
import { getMeshesGroup } from "./getMeshesGroup";

export class Scene_Element<D extends S_E_Data, M extends S_E_Mesh[]> {
  animate: (progress: S_Progress) => void;
  group: Group;
  localProgress: number | undefined;
  constructor(public data: D, public originalMeshes: M, public dimensionZ: number) {
    this.animate = function () {};
    this.data = data;
    this.dimensionZ = dimensionZ;
    this.localProgress = undefined;
    this.group = getMeshesGroup({ meshes: this.originalMeshes, data: this.data }).group;
  }
}
