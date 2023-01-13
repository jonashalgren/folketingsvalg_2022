import type { Mesh_Extrude } from "@models";
import { threeProperties } from "@assets";

type Props = {
  meshes: Mesh_Extrude[];
  value: number;
  color: string;
};

export function animateAreaMesh({ color, meshes, value }: Props) {
  meshes.forEach((mesh) => {
    mesh.scale.z = threeProperties.defaultThickness + value;
    mesh.position.z = value;
    mesh.material.color.setStyle(color);
  });
}
