import { pipe } from "@helpers";
import { setShapes } from "./setShapes";
import { setMeshes } from "./setMeshes";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { C_S_E_M_Map, C_S_S_E_Map_Area_Id } from "@models";
import type { Shape } from "three";

type AreaShape = {
  areaId: C_S_S_E_Map_Area_Id;
  shape: Shape;
};

export type Props = {
  areaIds: C_S_S_E_Map_Area_Id[];
  areaPaths: SVGResultPaths[];
  shapes?: AreaShape[];
  meshes?: C_S_E_M_Map[];
};

export const getMapMeshes = pipe(setShapes, setMeshes);
