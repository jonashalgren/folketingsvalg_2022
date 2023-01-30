import type { BoxGeometry, Mesh, MeshLambertMaterial, ExtrudeGeometry } from "three";

export type S_E_Box_Mesh = Mesh<BoxGeometry, MeshLambertMaterial[]>;

//------------------------------------------------------------

export type S_E_Figure_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type S_E_Text_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type S_E_Map_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type S_E_Transition_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type S_E_Mesh = S_E_Box_Mesh | S_E_Figure_Mesh | S_E_Text_Mesh | S_E_Map_Mesh | S_E_Transition_Mesh;

//------------------------------------------------------------

export type S_E_Mesh_Collection = {
  box: S_E_Box_Mesh[];
  figure: S_E_Figure_Mesh[];
  text: S_E_Text_Mesh[];
  map: S_E_Map_Mesh[];
  transition: S_E_Transition_Mesh[];
};
