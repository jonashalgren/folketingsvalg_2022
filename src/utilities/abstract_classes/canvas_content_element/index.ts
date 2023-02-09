import type { C_S_E_Mesh, C_S_Settings, C_S_S_Element } from "@models";
import type { Group } from "three";
import { getElementGroup } from "./getElementGroup";

export abstract class Canvas_Content_Element<D extends C_S_S_Element, M extends C_S_E_Mesh[]> {
  abstract animate(progress: number, entryProgress: number): void;
  abstract resize(elementSettings: D, sceneSettings: C_S_Settings): void;
  group: Group;
  localProgress: number | undefined;
  constructor(public elementSettings: D, public meshesTemplate: M, public sceneSettings: C_S_Settings) {
    this.localProgress = undefined;
    this.setElementGroup();
  }

  private setElementGroup() {
    this.group = getElementGroup({
      meshesTemplate: this.meshesTemplate ?? [],
      elementSettings: this.elementSettings,
    }).group;
  }

  update(progress: number, entryProgress: number) {
    this.animate(progress, entryProgress);
  }
}
