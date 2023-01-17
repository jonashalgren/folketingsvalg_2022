import { pipe } from "@helpers";
import { setAreaShapes } from "./setAreaShapes";
import { setAreaMeshes } from "./setAreaMeshes";
import { setMap } from "./setMap";

import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { S_E_Block_Map, S_E_Map_Area_Id } from "@models";
import type { Shape, Mesh, ExtrudeBufferGeometry, MeshLambertMaterial } from "three";

type AreaShape = {
  areaId: S_E_Map_Area_Id;
  shape: Shape;
};

export type Props = {
  areaIds: S_E_Map_Area_Id[];
  areaPaths: SVGResultPaths[];
  areaShapes?: AreaShape[];
  areaMeshes?: Mesh<ExtrudeBufferGeometry, MeshLambertMaterial>[][];
  map?: S_E_Block_Map;
};

export const getMap = pipe(setAreaShapes, setAreaMeshes, setMap);
