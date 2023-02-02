import type { S_E_Map_Mesh, S_S_E_Map_Config, S_S_E_Map_Area_Id } from "@models";
import { defaults } from "@assets";
import { getMapperScaleZ } from "./getMapperScaleZ";
import { getMapperColor } from "./getMapperColor";

export class Scene_Element_Map_Area {
  mapperScaleZ: (progress: number) => number;
  mapperColor: (progress: number) => string;
  animate: (progress: number) => void;

  constructor(
    public areaId: S_S_E_Map_Area_Id,
    public configs: S_S_E_Map_Config[],
    public meshes: S_E_Map_Mesh[],
    public dimensionZ: number
  ) {
    this.mapperScaleZ = getMapperScaleZ({ areaId, configs, dimensionZ });
    this.mapperColor = getMapperColor({ areaId, configs });
    this.setAnimate(this.meshes);
  }

  setAnimate(meshes: S_E_Map_Mesh[]) {
    this.animate = function animate(progress: number) {
      const scaleZ = this.mapperScaleZ(progress);
      const color = this.mapperColor(progress);
      meshes.forEach((mesh: S_E_Map_Mesh) => {
        mesh.scale.z = defaults.meshThickness + scaleZ;
        mesh.position.z = defaults.meshThickness + scaleZ;
        mesh.material.color.setStyle(color);
      });
    };
  }
}