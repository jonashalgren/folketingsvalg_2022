import { getAreaMeshes } from "./getAreaMeshes";
import type { Props } from "../index";

export function setMapPropertiesAreaMeshes(item: Props) {
  return {
    ...item,
    mapProperties: {
      areas: item.areaIds.map((areaId) => {
        return {
          id: areaId,
          meshes: getAreaMeshes({ areaId, mapAreaShapes: item.areaShapes }),
        };
      }),
    },
  };
}
