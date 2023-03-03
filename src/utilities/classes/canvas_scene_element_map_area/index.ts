import type { C_S_E_Mesh_Map, C_S_S_Element_Map, C_S_S_Element_Map_Area_Id, C_Scene_Settings } from "@models";
import { element_mesh_settings } from "@assets";
import { getOpacityMapper } from "@helpers";
import { getMapperScaleZ } from "./getMapperScaleZ";
import { getMapperColor } from "./getMapperColor";

type Props = {
  areaId: C_S_S_Element_Map_Area_Id;
  elementSettings: C_S_S_Element_Map;
  meshes: C_S_E_Mesh_Map[];
  sceneSettings: C_Scene_Settings;
};

export class Canvas_Scene_Element_Map_Area {
  private localOpacity: number | undefined = 1;
  private mapperScaleZ: (progress: number) => number;
  private mapperColor: (progress: number) => string;
  private mapperOpacity: (isFaded: boolean) => number;

  constructor(public props: Props) {
    this.setMapperScaleZ();
    this.setMapperColor();
    this.setMapperOpacity();
  }

  private setMapperScaleZ() {
    this.mapperScaleZ = getMapperScaleZ({ areaId: this.props.areaId, configs: this.props.elementSettings.configs, sceneSettings: this.props.sceneSettings });
  }

  private setMapperColor() {
    this.mapperColor = getMapperColor({ areaId: this.props.areaId, configs: this.props.elementSettings.configs });
  }

  private setMapperOpacity() {
    this.mapperOpacity = getOpacityMapper({ duration: 1200, fadeOutStrength: 0.2 });
  }

  resize(elementSettings: C_S_S_Element_Map, sceneSettings: C_Scene_Settings) {
    this.props.elementSettings = elementSettings;
    this.props.sceneSettings = sceneSettings;

    this.setMapperScaleZ();
    this.setMapperColor();
  }

  animate(progress: number, isFaded: boolean) {
    const scaleZ = this.mapperScaleZ(progress);
    const color = this.mapperColor(progress);
    const opacity = this.mapperOpacity(isFaded);
    this.props.meshes.forEach((mesh: C_S_E_Mesh_Map) => {
      mesh.scale.z = element_mesh_settings.meshThickness + scaleZ;
      mesh.position.z = element_mesh_settings.meshThickness + scaleZ;
      mesh.material.color.setStyle(color);
      if (this.localOpacity !== opacity) {
        mesh.material.opacity = opacity;
      }
    });
  }
}
