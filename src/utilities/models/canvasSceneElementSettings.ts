import type { Party_Letter, Motion, C_S_Element_Type } from "@models";
import type { Vector3Tuple } from "three";

//------------------------------------------------------------

export type C_S_S_Element_Box = {
  type: C_S_Element_Type.BOX;
  texture?: C_S_S_Element_Box_Texture;
  partyLetter: Party_Letter;
  size: number;
  isFloating?: boolean;
  rotation?: [number, number, number];
  motion: C_S_S_Element_Box_Motion;
};

export type C_S_S_Element_Box_Motion = {
  inputRange: number[];
  outputRange: {
    position?: [number, number, number][];
    scale?: [number, number, number][];
  };
};

export type C_S_S_Element_Box_Texture = "logo" | "leader";

//------------------------------------------------------------

export type C_S_S_Element_Map = {
  type: C_S_Element_Type.MAP;
  configs: C_S_S_Element_Map_Config[];
  focus?: C_S_S_Element_Map_Focus[];
};

export type C_S_S_Element_Map_Focus = {
  inputRange: [number, number];
  areas: C_S_S_Element_Map_Area_Id[];
};

export type C_S_S_Element_Map_Year = "2019" | "2022";

export type C_S_S_Element_Map_Config = C_S_S_Element_Map_Config_Party_Allocation | C_S_S_Element_Map_Config_Blank;

export type C_S_S_Element_Map_Config_Party_Allocation = {
  mapVariant: "party_vote_allocation";
  year: C_S_S_Element_Map_Year;
  partyLetter: Party_Letter;
  inputRange: [number, number];
  areasProperties?: C_S_S_Element_Map_Config_Party_Allocation_area_Properties[];
  highestAreaResultPct?: number;
  lowestAreaResultPct?: number;
};
export type C_S_S_Element_Map_Config_Party_Allocation_area_Properties = {
  areaId: C_S_S_Element_Map_Area_Id;
  pct: number;
  color?: string;
};

export type C_S_S_Element_Map_Config_Blank = {
  mapVariant: "blank";
  color?: string;
  inputRange: [number, number];
};

export type C_S_S_Element_Map_Area_Id =
  | "Østerbro"
  | "Sundbyvester"
  | "Indre_By"
  | "Sundbyøster"
  | "Nørrebro"
  | "Utterslev"
  | "Brønshøj"
  | "Valby"
  | "Vesterbro"
  | "Falkoner"
  | "Slots"
  | "Tårnby"
  | "Gentofte"
  | "Lyngby"
  | "Gladsaxe"
  | "Rødovre"
  | "Hvidovre"
  | "Brøndby"
  | "Taastrup"
  | "Ballerup"
  | "Helsingør"
  | "Fredensborg"
  | "Hillerød"
  | "Frederikssund"
  | "Egedal"
  | "Rudersdal"
  | "Rønne"
  | "Aakirkeby"
  | "Lolland"
  | "Guldborgsund"
  | "Vordingborg"
  | "Næstved"
  | "Fakse"
  | "Køge"
  | "Greve"
  | "Roskilde"
  | "Holbæk"
  | "Kalundborg"
  | "Ringsted"
  | "Slagelse"
  | "Odense_Øst"
  | "Odense_Vest"
  | "Odense_Syd"
  | "Assens"
  | "Middelfart"
  | "Nyborg"
  | "Svendborg"
  | "Faaborg"
  | "Sønderborg"
  | "Aabenraa"
  | "Tønder"
  | "Esbjerg_By"
  | "Esbjerg_Omegn"
  | "Varde"
  | "Vejen"
  | "Vejle_Nord"
  | "Vejle_Syd"
  | "Fredericia"
  | "Kolding_Nord"
  | "Kolding_Syd"
  | "Haderslev"
  | "Aarhus_Syd"
  | "Aarhus_Vest"
  | "Aarhus_Nord"
  | "Aarhus_Øst"
  | "Djurs"
  | "Randers_Nord"
  | "Randers_Syd"
  | "Favrskov"
  | "Skanderborg"
  | "Horsens"
  | "Hedensted"
  | "Struer"
  | "Skive"
  | "Viborg_Vest"
  | "Viborg_Øst"
  | "Silkeborg_Nord"
  | "Silkeborg_Syd"
  | "Ikast"
  | "Herning_Syd"
  | "Herning_Nord"
  | "Holstebro"
  | "Ringkøbing"
  | "Frederikshavn"
  | "Hjørring"
  | "Brønderslev"
  | "Thisted"
  | "Himmerland"
  | "Mariagerfjord"
  | "Aalborg_Øst"
  | "Aalborg_Vest"
  | "Aalborg_Nord";

//------------------------------------------------------------

export type C_S_S_Element_Figure = {
  type: C_S_Element_Type.FIGURE;
  amount: number;
  color: string;
  rows: number;
  width: number;
  items: C_S_S_Element_Figure_Item[];
};

export type C_S_S_Element_Figure_Item = {
  inputRange: [number, number];
  disabled: number;
};

//------------------------------------------------------------

export type C_S_S_Element_Text = {
  type: C_S_Element_Type.TEXT;
  font: string;
  text: string;
  fontSize: number;
  maxWidth: number;
  textAlign: "center" | "left" | "right";
  color: string;
  rotation: [number, number, number];
  position: [number, number, number];
};

//------------------------------------------------------------

export type C_S_S_Element_Number = {
  type: C_S_Element_Type.NUMBER;
  font: string;
  unit: string;
  motion: C_S_S_Element_Number_Motion;
  decimals: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
};

export type C_S_S_Element_Number_Motion = {
  position: Motion<Vector3Tuple>;
  color: Motion<string>;
  value: Motion<number>;
  size: Motion<number>;
};

//------------------------------------------------------------

export type C_S_S_Element_Transition = {
  type: C_S_Element_Type.TRANSITION;
};

//------------------------------------------------------------

export type C_S_S_Element = C_S_S_Element_Map | C_S_S_Element_Number | C_S_S_Element_Text | C_S_S_Element_Box | C_S_S_Element_Figure | C_S_S_Element_Transition;
