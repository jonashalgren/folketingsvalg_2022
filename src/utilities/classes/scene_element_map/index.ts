import { Scene_Element, Scene_Element_Map_Area } from "@classes";
import { election_result } from "@assets";
import type { S_E_Map_Mesh, S_Progress, S_Settings, S_S_E_Map, S_S_E_Map_Config } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";
import { getAreas } from "./getAreas";

export class Scene_Element_Map extends Scene_Element<S_S_E_Map, S_E_Map_Mesh[]> {
  configs: S_S_E_Map_Config[];
  meshes: S_E_Map_Mesh[];
  areas: Scene_Element_Map_Area[];

  constructor(public mapSettings: S_S_E_Map, public originalMeshes: S_E_Map_Mesh[], public sceneSettings: S_Settings) {
    super(mapSettings, originalMeshes, sceneSettings);
    this.meshes = <S_E_Map_Mesh[]>this.group.children;

    this.configs = getProcessedConfigs({
      electionResult: election_result,
      configs: this.mapSettings.configs,
    }).configs;

    this.areas = getAreas({
      electionResult: election_result,
      configs: this.configs,
      meshes: this.meshes,
      dimensionZ: this.sceneSettings.dimensionZ,
    });

    this.setAnimate();
  }

  setAnimate() {
    this.animate = function (progress: S_Progress) {
      this.areas.forEach((area: Scene_Element_Map_Area) => area.animate(progress.main));
    };
  }
}
