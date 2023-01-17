import type { Props } from "./index";
import { getMeshGeometry, getMesh, getMeshMaterial } from "@helpers";

export function setAreaMeshes(item: Props) {
  return {
    ...item,
    areaMeshes: item.areaIds.map((areaId) =>
      item.areaShapes
        .filter((item) => item.areaId === areaId)
        .map((item) => {
          const geometry = getMeshGeometry({ shape: item.shape, bevelOffset: -0.03, curveSegments: 1 });
          const material = getMeshMaterial({});
          const mesh = getMesh({ geometry, material });
          mesh.userData.isFaded = false;
          mesh.userData.areaId = areaId;
          return mesh;
        })
    ),
  };
}
