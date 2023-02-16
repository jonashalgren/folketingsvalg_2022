import { pipe } from "@helpers";
import type { C_S_S_Element, C_S_Element_Mesh } from "@models";
import { cloneMeshes } from "./cloneMeshes";
import { filterMeshes } from "./filterMeshes";

export type Props = {
  elementSettings: C_S_S_Element;
  elementMeshes: C_S_Element_Mesh[];
  meshes?: C_S_Element_Mesh[];
};

export const getElementMeshes = pipe(filterMeshes, cloneMeshes);
