import { pipe } from "@helpers";
import { setShapes } from "./setShapes";
import { setMeshes } from "./setMeshes";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { C_C_E_Mesh_Map, C_C_S_Element_Map_Area_Id } from "@models";
import type { Shape } from "three";

type AreaShape = {
  areaId: C_C_S_Element_Map_Area_Id;
  shape: Shape;
};

export type Props = {
  areaIds: C_C_S_Element_Map_Area_Id[];
  areaPaths: SVGResultPaths[];
  shapes?: AreaShape[];
  meshes?: C_C_E_Mesh_Map[];
};

export const getMapMeshes = pipe(setShapes, setMeshes);
