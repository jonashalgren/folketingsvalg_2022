import { pipe } from "@helpers";
import { setMapPropertiesAreaPoint } from "./setMapPropertiesAreaPoint";
import { setMapPropertiesAreaMeshes } from "./setMapPropertiesAreaMeshes";
import { setMapShapes } from "./setMapShapes";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { S_E_Map_Properties, S_E_Map_Properties_Area_Shape, S_E_Map_Area_Id } from "@models";

export type Props = {
  areaIds: S_E_Map_Area_Id[];
  areaPaths: SVGResultPaths[];
  areaShapes: S_E_Map_Properties_Area_Shape[];
  mapProperties?: S_E_Map_Properties;
};

export const getSceneMapProperties = pipe(setMapShapes, setMapPropertiesAreaMeshes, setMapPropertiesAreaPoint);
