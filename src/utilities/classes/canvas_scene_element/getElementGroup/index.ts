import { pipe } from "@helpers";
import type { C_S_S_Element, C_S_E_Mesh } from "@models";
import type { Group } from "three";
import { cloneMeshes } from "./cloneMeshes";
import { filterMeshes } from "./filterMeshes";
import { groupMeshes } from "./groupMeshes";

export type Props = {
  elementSettings: C_S_S_Element;
  meshesTemplate: C_S_E_Mesh[];
  group?: Group;
};

export const getElementGroup = pipe(filterMeshes, cloneMeshes, groupMeshes);
