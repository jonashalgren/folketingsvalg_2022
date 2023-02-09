import type { C_C_Element_Mesh, C_Content_Settings, C_S_S_Element } from "@models";
import type { Group } from "three";
import { getElementGroup } from "./getElementGroup";

export abstract class Canvas_Content_Element<D extends C_S_S_Element, M extends C_C_Element_Mesh[]> {
  abstract animate(progress: number, entryProgress: number): void;
  abstract resize(elementSettings: D, contentSettings: C_Content_Settings): void;
  group: Group;
  localProgress: number | undefined;
  constructor(public contentElementSettings: D, public meshesTemplate: M, public contentSettings: C_Content_Settings) {
    this.localProgress = undefined;
    this.setElementGroup();
  }

  private setElementGroup() {
    this.group = getElementGroup({
      meshesTemplate: this.meshesTemplate ?? [],
      contentElementSettings: this.contentElementSettings,
    }).group;
  }

  update(progress: number, entryProgress: number) {
    this.animate(progress, entryProgress);
  }
}
