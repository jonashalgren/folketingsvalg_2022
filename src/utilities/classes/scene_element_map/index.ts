import { Scene_Element, Scene_Element_Map_Area } from "@classes";
import { election_result_areas } from "@assets";
import type { S_E_M_Map, S_Settings, S_S_E_Map, S_S_E_Map_Config } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";
import { getAreas } from "./getAreas";

export class Scene_Element_Map extends Scene_Element<S_S_E_Map, S_E_M_Map[]> {
  configs: S_S_E_Map_Config[];
  meshes: S_E_M_Map[];
  areas: Scene_Element_Map_Area[];

  constructor(public mapSettings: S_S_E_Map, public meshesTemplate: S_E_M_Map[], public sceneSettings: S_Settings) {
    super(mapSettings, meshesTemplate, sceneSettings);
    this.meshes = <S_E_M_Map[]>this.group.children;

    this.configs = getProcessedConfigs({
      electionResult: election_result_areas,
      configs: this.mapSettings.configs,
    }).configs;

    this.areas = getAreas({
      electionResult: election_result_areas,
      configs: this.configs,
      meshes: this.meshes,
      sceneSettings,
    });

    this.setAnimate();
  }

  setAnimate() {
    this.animate = function (progress: number) {
      this.areas.forEach((area: Scene_Element_Map_Area) => area.animate(progress));
    };
  }
}
