import { Scene_Element } from "@classes";
import type { S_E_Box_Mesh, S_E_Box_Data, S_Progress } from "@models";
import { getScaleMapper } from "./getScaleMapper";
import { getPositionMapper } from "./getPositionMapper";
import type { Vector3Tuple } from "three";
import { degreesToRadians } from "popmotion";

export class Scene_Element_Box extends Scene_Element<S_E_Box_Data, S_E_Box_Mesh[]> {
  scaleMapper: (progress: number) => Vector3Tuple;
  positionMapper: (progress: number) => Vector3Tuple;
  mesh: S_E_Box_Mesh;

  constructor(public data: S_E_Box_Data, public originalMeshes: S_E_Box_Mesh[]) {
    super(data, originalMeshes);
    this.mesh = this.group.children[0] as S_E_Box_Mesh;
    this.positionMapper = getPositionMapper({ data: this.data });
    this.scaleMapper = getScaleMapper({ data: this.data });
    this.setGroupProperties();
    this.setAnimate();
  }

  setGroupProperties() {
    if (this.data?.rotation) {
      this.mesh.rotation.set(
        degreesToRadians(this.data.rotation[0]),
        degreesToRadians(this.data.rotation[1]),
        degreesToRadians(this.data.rotation[2])
      );
    }
  }

  setAnimate() {
    this.animate = (progress: S_Progress) => {
      const scale = this.scaleMapper(progress.main);
      const position = this.positionMapper(progress.main);
      this.mesh.scale.set(scale[0] * this.data.size, scale[1] * this.data.size, scale[2] * 0.8);
      this.mesh.position.set(
        position[0] - ((scale[0] - 1) * this.data.size) / 2,
        position[1] - ((scale[1] - 1) * this.data.size) / 2,
        position[2] + (scale[2] * 0.8) / 2
      );
    };
  }
}
