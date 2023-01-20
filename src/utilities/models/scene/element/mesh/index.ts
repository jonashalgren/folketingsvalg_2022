import type { BoxGeometry, Mesh, MeshBasicMaterial, ExtrudeGeometry, MeshLambertMaterial } from "three";

export type S_E_Image_Mesh = Mesh<BoxGeometry, MeshBasicMaterial[]>;
export type S_E_Image_Meshes = S_E_Image_Mesh[];
//------------------------------------------------------------

//------------------------------------------------------------

export type S_E_Logo_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;
export type S_E_Logo_Meshes = S_E_Logo_Mesh[];

//------------------------------------------------------------

export type S_E_Figure_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;
export type S_E_Figure_Meshes = S_E_Figure_Mesh[];

//------------------------------------------------------------

export type S_E_Text_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;
export type S_E_Text_Meshes = S_E_Text_Mesh[];

//------------------------------------------------------------

export type S_E_Map_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;
export type S_E_Map_Meshes = S_E_Map_Mesh[];

//------------------------------------------------------------

export type S_E_Transition_Mesh = Mesh<ExtrudeGeometry, MeshLambertMaterial>;
export type S_E_Transition_Meshes = S_E_Transition_Mesh[];

//------------------------------------------------------------

export type S_E_Mesh =
  | S_E_Image_Mesh
  | S_E_Logo_Mesh
  | S_E_Figure_Mesh
  | S_E_Text_Mesh
  | S_E_Map_Mesh
  | S_E_Transition_Mesh;

//------------------------------------------------------------

export type S_E_Meshes =
  | S_E_Image_Meshes
  | S_E_Logo_Meshes
  | S_E_Figure_Meshes
  | S_E_Text_Meshes
  | S_E_Map_Meshes
  | S_E_Transition_Meshes;

//------------------------------------------------------------

export type S_E_Meshes_Collection = {
  image: S_E_Image_Meshes;
  logo: S_E_Logo_Meshes;
  figure: S_E_Figure_Meshes;
  text: S_E_Text_Meshes;
  map: S_E_Map_Meshes;
  transition: S_E_Transition_Meshes;
};
