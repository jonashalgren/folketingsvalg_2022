import { getMeshGeometry } from "@helpers";
import { interpolate } from "popmotion";
import { Color, Mesh, MeshLambertMaterial, CustomBlending, MinEquation, SrcAlphaFactor, Shape } from "three";
import type { ExtrudeBufferGeometry, Vector3Tuple } from "three";

export class Scene_Element_Transition_Square {
  material: MeshLambertMaterial;
  geometry: ExtrudeBufferGeometry;
  shape: Shape;
  size: number;
  mesh: Mesh;

  positionMapper: (progress: number) => Vector3Tuple;
  rotationMapper: (progress: number) => Vector3Tuple;
  animate: (progress: number, colorAlpha: number) => void;
  constructor(
    public color: Color,
    public whiteColor: Color,
    public blackColor: Color,
    public positionOutputRange: [Vector3Tuple, Vector3Tuple],
    public rotationOutputRange: [Vector3Tuple, Vector3Tuple]
  ) {
    this.setShape();
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.positionMapper = interpolate([0.5, 1], positionOutputRange);
    this.rotationMapper = interpolate([0.5, 1], rotationOutputRange);
    this.setAnimate();
  }

  setShape() {
    const size = 40;
    this.shape = new Shape();
    this.shape.moveTo(-size, -size);
    this.shape.lineTo(-size, size);
    this.shape.lineTo(size, size);
    this.shape.lineTo(size, -size);
  }

  setGeometry() {
    this.geometry = getMeshGeometry({ shape: this.shape });
  }

  setMaterial() {
    this.material = new MeshLambertMaterial({ color: this.color });
    this.material.transparent = true;
    this.material.blending = CustomBlending;
    this.material.blendEquation = MinEquation;
    this.material.blendSrc = SrcAlphaFactor;
  }

  setMesh() {
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.scale.z = 0.1;
    this.mesh.position.set(...this.positionOutputRange[0]);
  }

  setAnimate() {
    this.animate = function (progress: number, colorAlpha: number) {
      if (this.localProgress !== progress) {
        this.localProgress = progress;

        this.mesh.material.color.lerpColors(this.color, this.whiteColor, colorAlpha);
        this.mesh.material.emissive.lerpColors(this.blackColor, this.whiteColor, colorAlpha);
        this.mesh.position.set(...this.positionMapper(progress));
        this.mesh.rotation.set(...this.rotationMapper(progress));
      }
    };
  }
}
