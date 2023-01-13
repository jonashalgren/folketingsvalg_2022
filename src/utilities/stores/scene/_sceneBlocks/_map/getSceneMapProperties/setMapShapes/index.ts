import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { getVariant } from "./getVariant";
import type { S_Map_Area_Id } from "@models";
import type { Props } from "../index";

export function setMapShapes(item: Props) {
  return {
    ...item,
    areaShapes: item.areaPaths.flatMap((path) => {
      return SVGLoader.createShapes(path).map((shape) => {
        const areaId = path.userData.node.parentElement.id as S_Map_Area_Id;
        const variant = getVariant({ path });
        return { areaId, shape, variant };
      });
    }),
  };
}
