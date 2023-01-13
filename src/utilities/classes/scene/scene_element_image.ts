import { Scene_Element } from "@classes";
import type { P_Leader_Mesh } from "@models";

export class Scene_Element_Image extends Scene_Element {
  constructor(
    private original_images: P_Leader_Mesh[],
    private positionRange: [number, number, number][],
    private scaleRange?: [number, number, number][],
    private rotation?: [number, number, number],
    private size?: number
  ) {
    super();
  }
}
