import type { Props } from "./index";
import type { S_E_Map_Mesh } from "@models";
import { getMeshGeometry, getMesh, getMeshMaterial } from "@helpers";

export function setMeshes(item: Props) {
  return {
    ...item,
    meshes: item.shapes.map((item) => {
      const geometry = getMeshGeometry({ shape: item.shape, bevelOffset: -0.03, curveSegments: 1 });
      const material = getMeshMaterial({});
      const mesh = getMesh({ geometry, material });

      mesh.userData.elemntType = "map";
      mesh.userData.isFaded = false;
      mesh.userData.areaId = item.areaId;
      return mesh as S_E_Map_Mesh;
    }),
  };
}
