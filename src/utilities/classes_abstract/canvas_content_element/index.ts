import type { C_C_Element_Mesh, C_Content_Settings, C_S_S_Element } from "@models";
import { getElementMeshes } from "./getElementMeshes";

export abstract class Canvas_Content_Element<D extends C_S_S_Element, M extends C_C_Element_Mesh[]> {
  elementSettings: D;
  meshesTemplate: M;
  contentSettings: C_Content_Settings;
  index: number;

  meshes: M;
  localProgress: number | undefined;

  abstract animate(progress: number, entryProgress: number): void;
  abstract resize(elementSettings: D, contentSettings: C_Content_Settings): void;

  constructor(elementSettings: D, meshesTemplate: M, contentSettings: C_Content_Settings, index: number) {
    this.elementSettings = elementSettings;
    this.meshesTemplate = meshesTemplate;
    this.contentSettings = contentSettings;
    this.index = index;
    this.localProgress = undefined;
    this.setElementMeshes();
  }

  private setElementMeshes() {
    this.meshes = getElementMeshes({
      meshesTemplate: this.meshesTemplate ?? [],
      elementSettings: this.elementSettings,
    }).meshes as M;
  }

  update(progress: number, entryProgress: number) {
    this.animate(progress, entryProgress);
  }
}
