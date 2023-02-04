import type { BoxGeometry, Mesh, MeshLambertMaterial, ExtrudeGeometry } from "three";
import type { Party_Letter, S_S_E_Map_Area_Id, S_S_E_Box_Texture } from "@models";

export type S_E_M_Box = Mesh<BoxGeometry, MeshLambertMaterial[]> & {
  userData: {
    partyLetter: Party_Letter;
    texture: S_S_E_Box_Texture;
  };
};

//------------------------------------------------------------

export type S_E_M_Figure = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  isFaded: boolean;
};

//------------------------------------------------------------

export type S_E_M_Text = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type S_E_M_Map = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  userData: {
    areaId: S_S_E_Map_Area_Id;
    isFaded: boolean;
  };
};

//------------------------------------------------------------

export type S_E_M_Transition = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type S_E_Mesh = S_E_M_Box | S_E_M_Figure | S_E_M_Text | S_E_M_Map | S_E_M_Transition;

export type S_E_Mesh_Templates = {
  box: S_E_M_Box[];
  figure: S_E_M_Figure[];
  text: S_E_M_Text[];
  map: S_E_M_Map[];
  transition: S_E_M_Transition[];
};
