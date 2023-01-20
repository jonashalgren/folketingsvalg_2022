import type { Motion, S_E_Map_Area_Id, S_E_Map_Properties_Area_Party } from "@models";

export type S_E_Map_Anim = {
  areaId: S_E_Map_Area_Id;
  value: Motion<number>;
  color: Motion<string>;
  party: Motion<S_E_Map_Properties_Area_Party>;
};
