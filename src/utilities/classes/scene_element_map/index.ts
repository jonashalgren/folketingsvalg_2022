import { Scene_Element, Scene_Element_Map_Area } from "@classes";
import { election_result } from "@assets";
import type { S_E_Map_Mesh, S_E_Map_Data, S_Progress, S_E_Map_Data_Config } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";
import { getAreas } from "./getAreas";

export class Scene_Element_Map extends Scene_Element<S_E_Map_Data, S_E_Map_Mesh[]> {
  configs: S_E_Map_Data_Config[];
  meshes: S_E_Map_Mesh[];
  areas: Scene_Element_Map_Area[];

  constructor(public data: S_E_Map_Data, public originalMeshes: S_E_Map_Mesh[], public dimensionZ: number) {
    super(data, originalMeshes, dimensionZ);
    this.meshes = <S_E_Map_Mesh[]>this.group.children;

    this.configs = getProcessedConfigs({
      electionResult: election_result,
      configs: this.data.configs,
    }).configs;

    this.areas = getAreas({
      electionResult: election_result,
      configs: this.configs,
      meshes: this.meshes,
      dimensionZ: this.dimensionZ,
    });

    this.setAnimate();
  }

  setAnimate() {
    this.animate = function (progress: S_Progress) {
      this.areas.forEach((area: Scene_Element_Map_Area) => area.animate(progress.main));
    };
  }
}
