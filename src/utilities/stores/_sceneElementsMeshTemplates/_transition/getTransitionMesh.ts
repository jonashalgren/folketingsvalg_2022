import { getMeshGeometry } from "@helpers";
import { Color, Mesh, MeshLambertMaterial, CustomBlending, MinEquation, SrcAlphaFactor, Shape } from "three";

type Props = {
  color: Color;
  shape: Shape;
};

export function getTransitionMesh({ color, shape }: Props) {
  const geometry = getMeshGeometry({ shape });
  const material = new MeshLambertMaterial({ color });
  const mesh = new Mesh(geometry, material);

  mesh.material.blending = CustomBlending;
  mesh.material.blendEquation = MinEquation;
  mesh.material.blendSrc = SrcAlphaFactor;

  mesh.up.set(0, 0, 1);
  mesh.scale.z = 0.1;

  return mesh;
}
