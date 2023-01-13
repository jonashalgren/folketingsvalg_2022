import type { S_Map_Properties_Area_Shape, S_Map_Area_Id } from "@models";
import { getMeshGeometry, getMesh, getMeshMaterial } from "@helpers";

type Props = {
  mapAreaShapes: S_Map_Properties_Area_Shape[];
  areaId: S_Map_Area_Id;
};

export function getAreaMeshes({ areaId, mapAreaShapes }: Props) {
  const shapeCollection = mapAreaShapes.filter(
    (item) => item.areaId === areaId && item.variant === "landmass"
  );
  return shapeCollection.map((item) => {
    const geometry = getMeshGeometry({ shape: item.shape, bevelOffset: -0.03, curveSegments: 1 });
    const material = getMeshMaterial({});
    const mesh = getMesh({ geometry, material });
    mesh.userData.isFaded = false;
    return mesh;
  });
}
