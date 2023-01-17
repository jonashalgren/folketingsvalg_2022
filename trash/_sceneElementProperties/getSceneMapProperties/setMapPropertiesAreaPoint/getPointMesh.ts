import type { S_E_Map_Properties_Area_Shape, S_E_Map_Area_Id } from "@models";
import { getMesh, getMeshGeometry, getMeshMaterial } from "@helpers";

type Props = {
  mapAreaShapes: S_E_Map_Properties_Area_Shape[];
  areaId: S_E_Map_Area_Id;
};

export function getPointMesh({ areaId, mapAreaShapes }: Props) {
  const shape = mapAreaShapes.find((item) => item.areaId === areaId && item.variant === "point")?.shape;
  const geometry = getMeshGeometry({ shape, bevelOffset: 0.1, curveSegments: 8 });
  const material = getMeshMaterial({});
  const mesh = getMesh({ material, geometry, scaleZ: 0.5 });
  mesh.matrixAutoUpdate = true;
  return mesh;
}
