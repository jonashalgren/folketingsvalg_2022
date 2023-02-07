import type { BoxGeometry, Mesh, MeshLambertMaterial, ExtrudeGeometry } from "three";
import type { Party_Letter, C_S_S_E_Map_Area_Id, C_S_S_E_Box_Texture } from "@models";

export type C_S_E_M_Box = Mesh<BoxGeometry, MeshLambertMaterial[]> & {
  userData: {
    partyLetter: Party_Letter;
    texture: C_S_S_E_Box_Texture;
  };
};

//------------------------------------------------------------

export type C_S_E_M_Figure = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  isFaded: boolean;
};

//------------------------------------------------------------

export type C_S_E_M_Text = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type C_S_E_M_Map = Mesh<ExtrudeGeometry, MeshLambertMaterial> & {
  userData: {
    areaId: C_S_S_E_Map_Area_Id;
    isFaded: boolean;
  };
};

//------------------------------------------------------------

export type S_E_M_Transition = Mesh<ExtrudeGeometry, MeshLambertMaterial>;

//------------------------------------------------------------

export type C_S_E_Mesh = C_S_E_M_Box | C_S_E_M_Figure | C_S_E_M_Text | C_S_E_M_Map;

export type C_S_E_Mesh_Templates = {
  box: C_S_E_M_Box[];
  figure: C_S_E_M_Figure[];
  text: C_S_E_M_Text[];
  map: C_S_E_M_Map[];
};
