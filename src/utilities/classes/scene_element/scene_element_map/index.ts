import { Scene_Element } from "@classes";
import type { S_E_Block_Map, S_E_Map } from "@models";

export class Scene_Element_Map extends Scene_Element {
  constructor(public mapData: S_E_Map, public blockMap: S_E_Block_Map) {
    super();
  }
}
