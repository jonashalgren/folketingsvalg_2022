import type { BoxGeometry, Mesh, MeshLambertMaterial, ExtrudeGeometry, Vector3Tuple } from "three";
import type { Party_Letter, C_S_S_Element_Map_Area_Id, C_S_S_Element_Box_Texture } from "@models";

export type C_S_E_Mesh_Box = Mesh<BoxGeometry, MeshLambertMaterial[]> & {
  userData: {
    partyLetter: Party_Letter;
    texture: C_S_S_Element_Box_Texture;
  };
};

//------------------------------------------------------------

export type C_S_E_Mesh_Figure = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  userData: {
    isFaded: boolean;
    stayHidden: boolean;
  };
};

//------------------------------------------------------------

export type C_S_E_Mesh_Text = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  font: string;
  textAlign: string;
  maxWidth: number;
  text: string;
  sync: () => void;
  fontSize: number;
  position: Vector3Tuple;
  color: string;
  anchorX: string;
  anchorY: string;
  userData: {
    stayHidden: boolean;
  };
};

//------------------------------------------------------------

export type C_S_E_Mesh_Map = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  userData: {
    areaId: C_S_S_Element_Map_Area_Id;
    isFaded: boolean;
  };
};

//------------------------------------------------------------

export type C_S_E_Mesh_Transition = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  userData: {
    stayHidden: boolean;
  };
};

//------------------------------------------------------------

export type C_S_Element_Mesh = C_S_E_Mesh_Box | C_S_E_Mesh_Figure | C_S_E_Mesh_Text | C_S_E_Mesh_Map | C_S_E_Mesh_Transition;

export type C_S_Elements_Meshes = {
  box: C_S_E_Mesh_Box[];
  map: C_S_E_Mesh_Map[];
  figure: C_S_E_Mesh_Figure[];
};
