import { Vector3 } from "three";
import type { Props } from "./index";

export function setSceneDimensionZ(item: Props): Props {
  return {
    ...item,
    data: {
      ...item.data,
      dimensionZ: (function () {
        const size = new Vector3(item.data.boundingBox.x, item.data.boundingBox.y, 0);
        const fov = item.camera.fov * (Math.PI / 180);
        const fovh = 2 * Math.atan(Math.tan(fov / 2) * item.camera.aspect);
        const dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan(fovh / 2));
        const dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan(fov / 2));
        const dimensionZ = Math.max(dx, dy) * 1.05;
        return dimensionZ;
      })(),
    },
  };
}
