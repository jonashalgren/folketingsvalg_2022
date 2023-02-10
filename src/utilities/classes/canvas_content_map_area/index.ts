import type { C_C_E_Mesh_Map, C_S_S_E_Map_Config, C_C_S_Element_Map_Area_Id, C_Content_Settings } from "@models";
import { mesh_static_settings } from "@assets";
import { getMapperScaleZ } from "./getMapperScaleZ";
import { getMapperColor } from "./getMapperColor";

export class Canvas_Content_Map_Area {
  private areaId: C_C_S_Element_Map_Area_Id;
  private configs: C_S_S_E_Map_Config[];
  private meshes: C_C_E_Mesh_Map[];
  private contentSettings: C_Content_Settings;

  private mapperScaleZ: (progress: number) => number;
  private mapperColor: (progress: number) => string;

  constructor(areaId: C_C_S_Element_Map_Area_Id, configs: C_S_S_E_Map_Config[], meshes: C_C_E_Mesh_Map[], contentSettings: C_Content_Settings) {
    this.areaId = areaId;
    this.configs = configs;
    this.meshes = meshes;
    this.contentSettings = contentSettings;

    this.setMapperScaleZ();
    this.setMapperColor();
  }

  private setMapperScaleZ() {
    this.mapperScaleZ = getMapperScaleZ({ areaId: this.areaId, configs: this.configs, contentSettings: this.contentSettings });
  }

  private setMapperColor() {
    this.mapperColor = getMapperColor({ areaId: this.areaId, configs: this.configs });
  }

  resize(configs: C_S_S_E_Map_Config[], contentSettings: C_Content_Settings) {
    this.configs = configs;
    this.contentSettings = contentSettings;

    this.setMapperScaleZ();
    this.setMapperColor();
  }

  animate(progress: number) {
    const scaleZ = this.mapperScaleZ(progress);
    const color = this.mapperColor(progress);
    this.meshes.forEach((mesh: C_C_E_Mesh_Map) => {
      mesh.scale.z = mesh_static_settings.meshThickness + scaleZ;
      mesh.position.z = mesh_static_settings.meshThickness + scaleZ;
      mesh.material.color.setStyle(color);
    });
  }
}
