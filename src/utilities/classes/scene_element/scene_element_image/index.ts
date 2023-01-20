import { Scene_Element } from "@classes";
import type { S_E_Image_Meshes, S_E_Image_Data } from "@models";

export class Scene_Element_Image extends Scene_Element<S_E_Image_Data, S_E_Image_Meshes> {
  constructor(public data: S_E_Image_Data, public meshes: S_E_Image_Meshes) {
    super(data, meshes);
  }
}
