import type { Canvas_Content_Box, Canvas_Content_Map, Canvas_Content_Transition } from "@classes";
import type { C_C_E_Mesh_Box, C_C_E_Mesh_Map, C_C_Element_Type } from "@models";

export type C_C_E_Details_Box = {
  type: C_C_Element_Type.box;
  class: typeof Canvas_Content_Box;
  meshes: C_C_E_Mesh_Box[];
};

export type C_C_E_Details_Transition = {
  type: C_C_Element_Type.transition;
  class: typeof Canvas_Content_Transition;
};

export type C_C_E_Details_Map = {
  type: C_C_Element_Type.map;
  class: typeof Canvas_Content_Map;
  meshes: C_C_E_Mesh_Map[];
};

export type C_C_Element_Details = C_C_E_Details_Box | C_C_E_Details_Transition | C_C_E_Details_Map;
