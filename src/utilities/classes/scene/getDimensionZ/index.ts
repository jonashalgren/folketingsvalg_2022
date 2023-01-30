import { PerspectiveCamera, Vector3 } from "three";
import type { S_Bounding_Box } from "@models";

type Props = {
  camera: PerspectiveCamera;
  boundingBox: S_Bounding_Box;
};

export function getDimensionZ({ camera, boundingBox }: Props) {
  const size = new Vector3(boundingBox.x, boundingBox.y, 0);
  const fov = camera.fov * (Math.PI / 180);
  const fovh = 2 * Math.atan(Math.tan(fov / 2) * camera.aspect);
  const dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan(fovh / 2));
  const dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan(fov / 2));
  const dimensionZ = Math.max(dx, dy) * 1.05;
  return dimensionZ;
}
