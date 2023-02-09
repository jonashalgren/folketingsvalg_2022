import { Canvas_Content_Map_Area } from "@classes";
import { Canvas_Content_Element } from "src/utilities/classes_abstract";
import { election_result_areas } from "@assets";
import type { C_C_E_Mesh_Map, C_Content_Settings, C_C_S_Element_Map, C_S_S_E_Map_Config } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";

export class Canvas_Content_Map extends Canvas_Content_Element<C_C_S_Element_Map, C_C_E_Mesh_Map[]> {
  private configs: C_S_S_E_Map_Config[];
  private meshes: C_C_E_Mesh_Map[];
  private areas: Canvas_Content_Map_Area[];

  constructor(public mapSettings: C_C_S_Element_Map, public meshesTemplate: C_C_E_Mesh_Map[], public contentSettings: C_Content_Settings) {
    super(mapSettings, meshesTemplate, contentSettings);
    this.meshes = <C_C_E_Mesh_Map[]>this.group.children;

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
        new Canvas_Content_Map_Area(
          area.id,
          this.configs,
          this.meshes.filter((entry) => entry.userData.areaId === area.id),
          this.contentSettings
        )
    );
  }

  private updateAreas() {
    this.areas.forEach((area) => {
      area.resize(this.configs, this.contentSettings);
    });
  }

  resize(mapSettings: C_C_S_Element_Map, contentSettings: C_Content_Settings) {
    this.mapSettings = mapSettings;
    this.contentSettings = contentSettings;

    this.setConfigs();
    this.updateAreas();
  }

  animate(progress: number) {
    this.areas.forEach((area: Canvas_Content_Map_Area) => area.animate(progress));
  }
}
