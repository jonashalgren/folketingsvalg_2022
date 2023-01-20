import type { Shape } from "three";
import type { S_E_Map_Area_Id, P_Letter, S_E_Map_Mesh_Variant, Mesh_Extrude } from "@models";

export type S_E_Map_Properties_Area_Party = P_Letter | "";

export type S_E_Map_Properties_Area_Shape = {
  areaId: S_E_Map_Area_Id;
  variant: S_E_Map_Mesh_Variant;
  shape: Shape;
};

export type S_E_Map_Properties_Area = {
  id: S_E_Map_Area_Id;
  meshes: Mesh_Extrude[];
};

export type S_E_Map_Properties = {
  areas: S_E_Map_Properties_Area[];
};
