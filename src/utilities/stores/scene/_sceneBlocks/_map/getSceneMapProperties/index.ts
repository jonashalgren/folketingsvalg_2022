import { pipe } from "@helpers";
import { setMapPropertiesAreaPoint } from "./setMapPropertiesAreaPoint";
import { setMapPropertiesAreaMeshes } from "./setMapPropertiesAreaMeshes";
import { setMapShapes } from "./setMapShapes";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { S_Map_Properties, S_Map_Properties_Area_Shape, S_Map_Area_Id } from "@models";

export type Props = {
  areaIds: S_Map_Area_Id[];
  areaPaths: SVGResultPaths[];
  areaShapes: S_Map_Properties_Area_Shape[];
  mapProperties?: S_Map_Properties;
};

export const getSceneMapProperties = pipe(
  setMapShapes,
  setMapPropertiesAreaMeshes,
  setMapPropertiesAreaPoint
);
