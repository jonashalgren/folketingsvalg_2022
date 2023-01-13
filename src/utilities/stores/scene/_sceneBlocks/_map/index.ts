import { derived } from "svelte/store";
import { mapAreaIds } from "@assets";
import { getSceneMapProperties } from "./getSceneMapProperties";
import { _mapAreaPaths } from "./_mapAreaPaths";

export const _sceneMapProperties = derived([_mapAreaPaths], ([$_mapAreaPaths]) =>
  $_mapAreaPaths.length > 0
    ? getSceneMapProperties({
        areaIds: mapAreaIds,
        areaPaths: $_mapAreaPaths,
        areaShapes: [],
      }).mapProperties
    : undefined
);
