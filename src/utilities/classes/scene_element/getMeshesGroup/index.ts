import { pipe } from "@helpers";
import type { S_E_Data, S_E_Mesh } from "@models";
import type { Group } from "three";
import { cloneMeshes } from "./cloneMeshes";
import { filterMeshes } from "./filterMeshes";
import { groupMeshes } from "./groupMeshes";

export type Props = {
  data: S_E_Data;
  meshes: S_E_Mesh[];
  group?: Group;
};

export const getMeshesGroup = pipe(filterMeshes, cloneMeshes, groupMeshes);
