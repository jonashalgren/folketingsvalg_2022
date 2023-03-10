import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import type { C_S_S_Element_Map_Area_Id } from "@models";
import type { Props } from "./index";

export function setShapes(item: Props) {
  return {
    ...item,
    shapes: item.areaPaths.flatMap((path) => {
      return SVGLoader.createShapes(path).map((shape) => {
        const areaId = path.userData.node.parentElement.id as C_S_S_Element_Map_Area_Id;
        return { areaId, shape };
      });
    }),
  };
}
