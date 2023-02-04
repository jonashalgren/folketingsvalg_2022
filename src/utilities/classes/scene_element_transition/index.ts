import { Scene_Element } from "@classes";
import type { S_E_M_Transition, S_S_E_Transition } from "@models";

export class Scene_Element_Transition extends Scene_Element<S_S_E_Transition, S_E_M_Transition[]> {
  meshes: S_E_M_Transition[];

  constructor(public transitionSettings: S_S_E_Transition, public meshesTemplate: S_E_M_Transition[]) {
    super(transitionSettings, meshesTemplate, undefined);
    this.meshes = <S_E_M_Transition[]>this.group.children;
  }
}
