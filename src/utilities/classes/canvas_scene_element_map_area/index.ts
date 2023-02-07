import type { C_S_E_M_Map, C_S_S_E_Map_Config, C_S_S_E_Map_Area_Id, C_S_Settings } from "@models";
import { mesh_default_settings } from "@assets";
import { getMapperScaleZ } from "./getMapperScaleZ";
import { getMapperColor } from "./getMapperColor";

export class Canvas_Scene_Element_Map_Area {
  private mapperScaleZ: (progress: number) => number;
  private mapperColor: (progress: number) => string;

  constructor(private areaId: C_S_S_E_Map_Area_Id, private configs: C_S_S_E_Map_Config[], private meshes: C_S_E_M_Map[], private sceneSettings: C_S_Settings) {
    this.setMapperScaleZ();
    this.setMapperColor();
  }

  private setMapperScaleZ() {
    this.mapperScaleZ = getMapperScaleZ({ areaId: this.areaId, configs: this.configs, sceneSettings: this.sceneSettings });
  }

  private setMapperColor() {
    this.mapperColor = getMapperColor({ areaId: this.areaId, configs: this.configs });
  }

  resize(configs: C_S_S_E_Map_Config[], sceneSettings: C_S_Settings) {
    this.configs = configs;
    this.sceneSettings = sceneSettings;

    this.setMapperScaleZ();
    this.setMapperColor();
  }

  animate(progress: number) {
    const scaleZ = this.mapperScaleZ(progress);
    const color = this.mapperColor(progress);
    this.meshes.forEach((mesh: C_S_E_M_Map) => {
      mesh.scale.z = mesh_default_settings.meshThickness + scaleZ;
      mesh.position.z = mesh_default_settings.meshThickness + scaleZ;
      mesh.material.color.setStyle(color);
    });
  }
}
