import { getMeshGeometry } from "@helpers";
import { Color, Mesh, MeshLambertMaterial, CustomBlending, MinEquation, SrcAlphaFactor, Shape } from "three";

type Props = {
  index: number;
  color: Color;
  shape: Shape;
  size: number;
  xOffset: number;
  yOffset: number;
};

export function getTransitionMesh({ index, color, shape, xOffset, yOffset, size }: Props) {
  const geometry = getMeshGeometry({ shape });
  const material = new MeshLambertMaterial({ color });
  const mesh = new Mesh(geometry, material);

  mesh.material.blending = CustomBlending;
  mesh.material.blendEquation = MinEquation;
  mesh.material.blendSrc = SrcAlphaFactor;

  mesh.up.set(0, 0, 1);
  mesh.scale.z = 0.1;
  mesh.position.set(size * xOffset, size * yOffset, 5 + index * 7);

  return mesh;
}
