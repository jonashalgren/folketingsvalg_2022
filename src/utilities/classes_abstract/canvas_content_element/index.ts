import type { C_C_Element_Mesh, C_Content_Settings, C_S_S_Element } from "@models";
import type { Group } from "three";
import { getElementGroup } from "./getElementGroup";

export abstract class Canvas_Content_Element<D extends C_S_S_Element, M extends C_C_Element_Mesh[]> {
  public elementSettings: D;
  public meshesTemplate: M;
  public contentSettings: C_Content_Settings;
  public index: number;

  group: Group;
  localProgress: number | undefined;

  abstract animate(progress: number, entryProgress: number): void;
  abstract resize(elementSettings: D, contentSettings: C_Content_Settings): void;

  constructor(elementSettings: D, meshesTemplate: M, contentSettings: C_Content_Settings, index: number) {
    this.elementSettings = elementSettings;
    this.meshesTemplate = meshesTemplate;
    this.contentSettings = contentSettings;
    this.index = index;
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
