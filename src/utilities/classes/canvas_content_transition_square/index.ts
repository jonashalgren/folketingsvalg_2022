import { getMeshGeometry } from "@helpers";
import { interpolate } from "popmotion";
import { Color, Mesh, MeshLambertMaterial, CustomBlending, MinEquation, SrcAlphaFactor, Shape } from "three";
import type { ExtrudeBufferGeometry, Vector3Tuple } from "three";

export class Canvas_Content_Transition_Square {
  private color: Color;
  private whiteColor: Color;
  private blackColor: Color;
  private positionOutputRange: [Vector3Tuple, Vector3Tuple];
  private rotationOutputRange: [Vector3Tuple, Vector3Tuple];

  private material: MeshLambertMaterial;
  private geometry: ExtrudeBufferGeometry;
  private shape: Shape;
  private localProgress: number;
  mesh: Mesh<ExtrudeBufferGeometry, MeshLambertMaterial>;

  positionMapper: (progress: number) => Vector3Tuple;
  rotationMapper: (progress: number) => Vector3Tuple;

  constructor(color: Color, whiteColor: Color, blackColor: Color, positionOutputRange: [Vector3Tuple, Vector3Tuple], rotationOutputRange: [Vector3Tuple, Vector3Tuple]) {
    this.color = color;
    this.whiteColor = whiteColor;
    this.blackColor = blackColor;
    this.positionOutputRange = positionOutputRange;
    this.rotationOutputRange = rotationOutputRange;

    this.setShape();
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.positionMapper = interpolate([0.5, 1], this.positionOutputRange);
    this.rotationMapper = interpolate([0.5, 1], this.rotationOutputRange);
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
    this.geometry = getMeshGeometry({ shape: this.shape });
  }

  private setMaterial() {
    this.material = new MeshLambertMaterial({ color: this.color });
    this.material.transparent = true;
    this.material.blending = CustomBlending;
    this.material.blendEquation = MinEquation;
    this.material.blendSrc = SrcAlphaFactor;
  }

  private setMesh() {
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.scale.z = 0.1;
    this.mesh.position.set(...this.positionOutputRange[0]);
  }

  animate(progress: number, colorAlpha: number) {
    if (this.localProgress !== progress) {
      this.localProgress = progress;

      this.mesh.material.color.lerpColors(this.color, this.whiteColor, colorAlpha);
      this.mesh.material.emissive.lerpColors(this.blackColor, this.whiteColor, colorAlpha);
      this.mesh.position.set(...this.positionMapper(progress));
      this.mesh.rotation.set(...this.rotationMapper(progress));
    }
  }
}
