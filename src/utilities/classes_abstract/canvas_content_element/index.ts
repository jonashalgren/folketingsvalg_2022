import type { C_C_Element_Mesh, C_Content_Settings, C_S_S_Element } from "@models";
import { getElementMeshes } from "./getElementMeshes";

export abstract class Canvas_Content_Element<D extends C_S_S_Element, M extends C_C_Element_Mesh[]> {
  elementSettings: D;
  meshesTemplate: M;
  sceneSettings: C_Content_Settings;
  index: number;

  meshes: M;
  private localProgress: number | undefined = undefined;
  private localEntryProgress: number | undefined = undefined;

  private localOpacity: number | undefined = undefined;
  abstract animate(progress: number, entryProgress: number): void;
  abstract resize(elementSettings: D, sceneSettings: C_Content_Settings): void;

  constructor(elementSettings: D, meshesTemplate: M, sceneSettings: C_Content_Settings, index: number) {
    this.elementSettings = elementSettings;
    this.meshesTemplate = meshesTemplate;
    this.sceneSettings = sceneSettings;
    this.index = index;
    this.setMeshes();
  }

  private setMeshes() {
    this.meshes = getElementMeshes({
      meshesTemplate: this.meshesTemplate ?? [],
      elementSettings: this.elementSettings,
    }).meshes as M;
  }

  private setMeshesOpacity(opacity: number) {
    this.meshes.forEach((mesh) => {
      if (!mesh.userData.stayHidden) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => (material.opacity = opacity));
        } else {
          mesh.material.opacity = opacity;
        }
      }
    });
  }

  update(progress: number = 0, entryProgress: number = 0, opacity: number = 0) {
    if (this.localProgress !== progress || this.localEntryProgress !== entryProgress) {
      this.localProgress = progress;
      this.animate(progress, entryProgress);
    }
    if (this.localOpacity !== opacity) {
      this.localOpacity = opacity;
      this.setMeshesOpacity(opacity);
    }
  }
}
