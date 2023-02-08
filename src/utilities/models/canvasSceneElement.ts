import type { BoxGeometry, Mesh, MeshLambertMaterial, ExtrudeGeometry } from "three";
import type { Party_Letter, C_S_S_E_Map_Area_Id, C_S_S_E_Box_Texture } from "@models";
import type { Canvas_Scene_Element_Box, Canvas_Scene_Element_Map, Canvas_Scene_Element_Transition } from "@classes";

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

export type C_S_E_Mesh = C_S_E_M_Box | C_S_E_M_Figure | C_S_E_M_Text | C_S_E_M_Map;

export type C_S_E_Details = {
  box: {
    class: typeof Canvas_Scene_Element_Box;
    meshes: C_S_E_M_Box[];
  };
  transition: {
    class: typeof Canvas_Scene_Element_Transition;
  };
  map: {
    class: typeof Canvas_Scene_Element_Map;
    meshes: C_S_E_M_Map[];
  };
};
