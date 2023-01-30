import { Scene_Element } from "@classes";
import type { S_E_Map_Mesh, S_E_Map_Data } from "@models";
import { getProcessedMapData } from "./getProcessedMapData";

export class Scene_Element_Map extends Scene_Element<S_E_Map_Data, S_E_Map_Mesh[]> {
  mapperScaleZ: ((progress: number) => number)[];
  processedMapData: S_E_Map_Data;

  constructor(public data: S_E_Map_Data, public originalMeshes: S_E_Map_Mesh[], public dimensionZ: number) {
    super(data, originalMeshes, dimensionZ);
    this.processedMapData = getProcessedMapData({ data: this.data });
  }
}
