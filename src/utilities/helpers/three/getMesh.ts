import type { ExtrudeBufferGeometry, MeshLambertMaterial } from "three";
import { Mesh } from "three";
import { threeProperties } from "@assets";

type Props = {
  material: MeshLambertMaterial;
  geometry: ExtrudeBufferGeometry;
  scaleZ?: number;
};

export function getMesh({ material, geometry, scaleZ = threeProperties.defaultThickness }: Props) {
  const mesh = new Mesh(geometry, material);
  mesh.scale.z = scaleZ;
  mesh.position.z = scaleZ;
  mesh.up.set(0, 0, 1);
  return mesh;
}
