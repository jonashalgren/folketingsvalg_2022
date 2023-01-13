import { Vector3, PerspectiveCamera } from "three";

type Props = {
  camera: PerspectiveCamera;
  bbox: { x: number; y: number };
};

export const getOutputOffsetZ = function ({ camera, bbox }: Props) {
  const size = new Vector3(bbox.x, bbox.y, 0);

  const fov = camera.fov * (Math.PI / 180);
  const fovh = 2 * Math.atan(Math.tan(fov / 2) * camera.aspect);
  const dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan(fovh / 2));
  const dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan(fov / 2));
  const cameraZ = Math.max(dx, dy) * 1.05;

  return cameraZ;
};
