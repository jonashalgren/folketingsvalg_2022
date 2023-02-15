import type { BoxGeometry, Mesh, MeshLambertMaterial, ExtrudeGeometry } from "three";
import type { Party_Letter, C_C_S_Element_Map_Area_Id, C_C_S_Element_Box_Texture } from "@models";

export type C_C_E_Mesh_Box = Mesh<BoxGeometry, MeshLambertMaterial[]> & {
  userData: {
    partyLetter: Party_Letter;
    texture: C_C_S_Element_Box_Texture;
  };
};

//------------------------------------------------------------

export type C_C_E_Mesh_Figure = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  isFaded: boolean;
};

//------------------------------------------------------------

export type C_C_E_Mesh_Text = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  stayHidden: boolean;
};

//------------------------------------------------------------

export type C_C_E_Mesh_Map = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  userData: {
    areaId: C_C_S_Element_Map_Area_Id;
    isFaded: boolean;
  };
};

//------------------------------------------------------------

export type C_C_E_Mesh_Transition = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  stayHidden: boolean;
};

//------------------------------------------------------------

export type C_C_Element_Mesh = C_C_E_Mesh_Box | C_C_E_Mesh_Figure | C_C_E_Mesh_Text | C_C_E_Mesh_Map | C_C_E_Mesh_Transition;
