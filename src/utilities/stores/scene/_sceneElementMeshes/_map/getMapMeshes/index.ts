import { pipe } from "@helpers";
import { setShapes } from "./setShapes";
import { setMeshes } from "./setMeshes";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { S_E_Map_Mesh, S_E_Map_Data_Area_Id } from "@models";
import type { Shape } from "three";

type AreaShape = {
  areaId: S_E_Map_Data_Area_Id;
  shape: Shape;
};

export type Props = {
  areaIds: S_E_Map_Data_Area_Id[];
  areaPaths: SVGResultPaths[];
  shapes?: AreaShape[];
  meshes?: S_E_Map_Mesh[];
};

export const getMapMeshes = pipe(setShapes, setMeshes);
