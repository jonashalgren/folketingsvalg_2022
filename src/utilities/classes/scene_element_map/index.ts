import { Scene_Element } from "@classes";
import type { S_E_Map_Mesh, S_E_Map_Data } from "@models";

export class Scene_Element_Map extends Scene_Element<S_E_Map_Data, S_E_Map_Mesh[]> {
  constructor(public data: S_E_Map_Data, public originalMeshes: S_E_Map_Mesh[]) {
    super(data, originalMeshes);
  }
}
