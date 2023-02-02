import { pipe } from "@helpers";
import type { S_S_Element, S_E_Mesh } from "@models";
import type { Group } from "three";
import { cloneMeshes } from "./cloneMeshes";
import { filterMeshes } from "./filterMeshes";
import { groupMeshes } from "./groupMeshes";

export type Props = {
  elementSettings: S_S_Element;
  meshesTemplate: S_E_Mesh[];
  group?: Group;
};

export const getElementGroup = pipe(filterMeshes, cloneMeshes, groupMeshes);
