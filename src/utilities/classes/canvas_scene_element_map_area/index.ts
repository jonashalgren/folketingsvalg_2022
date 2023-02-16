import type { C_C_E_Mesh_Map, C_C_S_Element_Map, C_C_S_Element_Map_Area_Id, C_Content_Settings } from "@models";
import { mesh_static_settings } from "@assets";
import { getOpacityMapper } from "@helpers";
import { getMapperScaleZ } from "./getMapperScaleZ";
import { getMapperColor } from "./getMapperColor";

export class Canvas_Scene_Element_Map_Area {
  public areaId: C_C_S_Element_Map_Area_Id;
  private elementSettings: C_C_S_Element_Map;
  private meshes: C_C_E_Mesh_Map[];
  private sceneSettings: C_Content_Settings;
  private localOpacity: number | undefined = 1;

  private mapperScaleZ: (progress: number) => number;
  private mapperColor: (progress: number) => string;
  private mapperOpacity: (isFaded: boolean) => number;

  constructor(areaId: C_C_S_Element_Map_Area_Id, elementSettings: C_C_S_Element_Map, meshes: C_C_E_Mesh_Map[], sceneSettings: C_Content_Settings) {
    this.areaId = areaId;
    this.elementSettings = elementSettings;
    this.meshes = meshes;
    this.sceneSettings = sceneSettings;

    this.setMapperScaleZ();
    this.setMapperColor();
    this.setMapperOpacity();
  }

  private setMapperScaleZ() {
    this.mapperScaleZ = getMapperScaleZ({ areaId: this.areaId, configs: this.elementSettings.configs, sceneSettings: this.sceneSettings });
  }

  private setMapperColor() {
    this.mapperColor = getMapperColor({ areaId: this.areaId, configs: this.elementSettings.configs });
  }

  private setMapperOpacity() {
    this.mapperOpacity = getOpacityMapper({ duration: 1200, fadeOutStrength: 0.2 });
  }

  resize(elementSettings: C_C_S_Element_Map, sceneSettings: C_Content_Settings) {
    this.elementSettings = elementSettings;
    this.sceneSettings = sceneSettings;

    this.setMapperScaleZ();
    this.setMapperColor();
  }

  animate(progress: number, isFaded: boolean) {
    const scaleZ = this.mapperScaleZ(progress);
    const color = this.mapperColor(progress);
    const opacity = this.mapperOpacity(isFaded);
    this.meshes.forEach((mesh: C_C_E_Mesh_Map) => {
      mesh.scale.z = mesh_static_settings.meshThickness + scaleZ;
      mesh.position.z = mesh_static_settings.meshThickness + scaleZ;
      mesh.material.color.setStyle(color);
      if (this.localOpacity !== opacity) {
        mesh.material.opacity = opacity;
      }
    });
  }
}
