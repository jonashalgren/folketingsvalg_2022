import type { S_E_Mesh, S_E_Data, S_Progress } from "@models";
import type { Group } from "three";
import { getMeshesGroup } from "./getMeshesGroup";

export class Scene_Element<D extends S_E_Data, M extends S_E_Mesh[], N extends number> {
  animate: (progress: S_Progress) => void;
  group: Group;
  constructor(public data: D, public originalMeshes: M, public index: N) {
    this.animate = function () {};
    this.data = data;
    this.group = getMeshesGroup({ meshes: this.originalMeshes, data: this.data }).group;
  }
}
