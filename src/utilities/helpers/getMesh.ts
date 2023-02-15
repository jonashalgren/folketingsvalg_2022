import type { ExtrudeBufferGeometry, MeshLambertMaterial } from "three";
import { Mesh } from "three";
import { mesh_static_settings } from "@assets";

type Props = {
  material: MeshLambertMaterial;
  geometry: ExtrudeBufferGeometry;
  scaleZ?: number;
};

export function getMesh({ material, geometry, scaleZ = mesh_static_settings.meshThickness }: Props) {
  const mesh = new Mesh(geometry, material);
  mesh.scale.z = scaleZ;
  mesh.position.z = scaleZ;
  return mesh;
}
