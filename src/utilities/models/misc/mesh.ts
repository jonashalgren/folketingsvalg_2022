import type {
  MeshLambertMaterial,
  ExtrudeBufferGeometry,
  BoxBufferGeometry,
  Mesh,
  Material,
  TubeBufferGeometry,
  MeshBasicMaterial,
  BoxGeometry,
} from "three";

export type Mesh_Extrude = Mesh<ExtrudeBufferGeometry, MeshLambertMaterial>;

export type Mesh_Text = {
  text: any;
  sync: any;
  fontSize: any;
  position: any;
  color: any;
  anchorX: string;
  anchorY: string;
} & Mesh<ExtrudeBufferGeometry, Material>;

export type Mesh_Box = Mesh<BoxBufferGeometry, MeshLambertMaterial>;

export type Mesh_Line = Mesh<TubeBufferGeometry, MeshBasicMaterial>;

export type Mesh_Texture = Mesh<BoxGeometry, MeshBasicMaterial[]>;
