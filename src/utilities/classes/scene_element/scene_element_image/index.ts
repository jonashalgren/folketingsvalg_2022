import { Scene_Element } from "@classes";
import type { P_Leader_Mesh, S_E_Image } from "@models";

export class Scene_Element_Image extends Scene_Element {
  constructor(public imageData: S_E_Image, public original_image: P_Leader_Mesh[]) {
    super();
  }
}
