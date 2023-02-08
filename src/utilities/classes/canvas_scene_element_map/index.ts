import { Canvas_Scene_Element, Canvas_Scene_Element_Map_Area } from "@classes";
import { election_result_areas } from "@assets";
import type { C_S_E_M_Map, C_S_Settings, C_S_S_E_Map, C_S_S_E_Map_Config } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";

export class Canvas_Scene_Element_Map extends Canvas_Scene_Element<C_S_S_E_Map, C_S_E_M_Map[]> {
  private configs: C_S_S_E_Map_Config[];
  private meshes: C_S_E_M_Map[];
  private areas: Canvas_Scene_Element_Map_Area[];

  constructor(public mapSettings: C_S_S_E_Map, public meshesTemplate: C_S_E_M_Map[], public sceneSettings: C_S_Settings) {
    super(mapSettings, meshesTemplate, sceneSettings);
    this.meshes = <C_S_E_M_Map[]>this.group.children;

    this.setConfigs();
    this.setAreas();
  }

  private setConfigs() {
    this.configs = getProcessedConfigs({
      electionResult: election_result_areas,
      configs: this.mapSettings.configs,
    }).configs;
  }

  private setAreas() {
    this.areas = election_result_areas.map(
      (area) =>
        new Canvas_Scene_Element_Map_Area(
          area.id,
          this.configs,
          this.meshes.filter((entry) => entry.userData.areaId === area.id),
          this.sceneSettings
        )
    );
  }

  private updateAreas() {
    this.areas.forEach((area) => {
      area.resize(this.configs, this.sceneSettings);
    });
  }

  resize(mapSettings: C_S_S_E_Map, sceneSettings: C_S_Settings) {
    this.mapSettings = mapSettings;
    this.sceneSettings = sceneSettings;

    this.setConfigs();
    this.updateAreas();
  }

  animate(progress: number) {
    this.areas.forEach((area: Canvas_Scene_Element_Map_Area) => area.animate(progress));
  }
}
