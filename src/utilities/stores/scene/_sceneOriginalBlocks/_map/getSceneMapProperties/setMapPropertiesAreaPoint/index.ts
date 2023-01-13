import { getPointCoords } from "./getPointCoords";
import { getPointRadius } from "./getPointRadius";
import type { Props } from "../index";

export function setMapPropertiesAreaPoint(item: Props) {
  return {
    ...item,
    mapProperties: {
      areas: item.mapProperties.areas.map((area) => {
        return {
          ...area,
          pointRadius: getPointRadius({ areaMeshes: area.meshes }),
          pointCoords: getPointCoords({ areaId: area.id, mapAreaShapes: item.areaShapes }),
        };
      }),
    },
  };
}
