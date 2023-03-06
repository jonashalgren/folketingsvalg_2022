import { getExtrudeGeometry, getLambertMaterial } from "@helpers";
import { interpolate } from "popmotion";
import { Color, Mesh, MeshLambertMaterial, CustomBlending, MinEquation, SrcAlphaFactor, Shape } from "three";
import type { ExtrudeBufferGeometry, Vector3Tuple } from "three";
import type { C_S_E_Mesh_Transition } from "@models";

type Props = {
  color: Color;
  whiteColor: Color;
  blackColor: Color;
  positionOutputRange: [Vector3Tuple, Vector3Tuple];
  rotationOutputRange: [Vector3Tuple, Vector3Tuple];
};

export class Canvas_Scene_Element_Transition_Square {
  private material: MeshLambertMaterial;
  private geometry: ExtrudeBufferGeometry;
  private shape: Shape;
  private localProgress: number;

  mesh: C_S_E_Mesh_Transition;

  positionMapper: (progress: number) => Vector3Tuple;
  rotationMapper: (progress: number) => Vector3Tuple;

  constructor(private props: Props) {
    this.setShape();
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.positionMapper = interpolate([0.5, 1], this.props.positionOutputRange);
    this.rotationMapper = interpolate([0.5, 1], this.props.rotationOutputRange);
  }

  private setShape() {
    const size = 40;
    this.shape = new Shape();
    this.shape.moveTo(-size, -size);
    this.shape.lineTo(-size, size);
    this.shape.lineTo(size, size);
    this.shape.lineTo(size, -size);
  }

  private setGeometry() {
    this.geometry = getExtrudeGeometry({ shape: this.shape });
  }

  private setMaterial() {
    this.material = getLambertMaterial({ color: this.props.color });
    this.material.blending = CustomBlending;
    this.material.blendEquation = MinEquation;
    this.material.blendSrc = SrcAlphaFactor;
  }

  private setMesh() {
    this.mesh = new Mesh(this.geometry, this.material) as C_S_E_Mesh_Transition;
    this.mesh.userData.stayHidden = true;
    this.mesh.scale.z = 0.1;
    this.mesh.position.set(...this.props.positionOutputRange[0]);
  }

  animate(progress: number, colorAlpha: number) {
    if (this.localProgress !== progress) {
      this.localProgress = progress;

      this.mesh.material.color.lerpColors(this.props.color, this.props.whiteColor, colorAlpha);
      this.mesh.material.emissive.lerpColors(this.props.blackColor, this.props.whiteColor, colorAlpha);
      this.mesh.position.set(...this.positionMapper(progress));
      this.mesh.rotation.set(...this.rotationMapper(progress));
    }
  }
}
