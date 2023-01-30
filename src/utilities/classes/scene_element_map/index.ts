import { Scene_Element } from "@classes";
import type { S_E_Map_Mesh, S_E_Map_Data } from "@models";
import type { Mesh, ExtrudeGeometry, MeshLambertMaterial } from "three";

export class Scene_Element_Map extends Scene_Element<S_E_Map_Data, S_E_Map_Mesh[]> {
  scaleZMapper: ((progress: number) => number)[];
  meshes: Mesh<ExtrudeGeometry, MeshLambertMaterial>[];
  constructor(public data: S_E_Map_Data, public originalMeshes: S_E_Map_Mesh[]) {
    super(data, originalMeshes);
    this.meshes = <Mesh<ExtrudeGeometry, MeshLambertMaterial>[]>this.group.children;
  }
}
