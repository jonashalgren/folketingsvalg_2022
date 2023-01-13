import type { S_Map_Properties_Area_Shape, S_Map_Area_Id } from "@models";
import type { EllipseCurve } from "three";

type Props = {
  mapAreaShapes: S_Map_Properties_Area_Shape[];
  areaId: S_Map_Area_Id;
};

export function getPointCoords({ areaId, mapAreaShapes }: Props) {
  const shape = mapAreaShapes.find((item) => item.areaId === areaId && item.variant === "point")?.shape;
  const ellicpseCurve = shape?.curves[0] as EllipseCurve;

  return {
    x: ellicpseCurve?.aX ?? 0,
    y: ellicpseCurve?.aY ?? 0,
  };
}
