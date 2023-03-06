import type { C_S_Element_Mesh, C_Scene_Settings, C_S_S_Element, C_S_S_Element_Box } from "@models";
import { getElementMeshes } from "./getElementMeshes";

type Props<D extends C_S_S_Element, M extends C_S_Element_Mesh[]> = {
  elementSettings: D;
  sceneSettings?: C_Scene_Settings;
  elementMeshes?: M;
  index?: number;
  dimensionZ?: number;
};

export abstract class Canvas_Scene_Element<D extends C_S_S_Element, M extends C_S_Element_Mesh[]> implements Props<C_S_S_Element, C_S_Element_Mesh[]> {
  elementSettings: D;
  elementMeshes?: M;
  sceneSettings?: C_Scene_Settings;
  index?: number;
  dimensionZ?: number;

  meshes: M;

  private localProgress: number | undefined = undefined;
  private localEntryProgress: number | undefined = undefined;
  private localOpacity: number | undefined = undefined;

  abstract animate(progress: number, entryProgress: number): void;
  abstract resize(): void;

  constructor({ elementSettings, elementMeshes, sceneSettings, index, dimensionZ = 100 }: Props<D, M>) {
    this.elementSettings = elementSettings;
    this.elementMeshes = elementMeshes;
    this.sceneSettings = sceneSettings;
    this.index = index;
    this.dimensionZ = dimensionZ;
    this.setMeshes();
  }

  private setMeshes() {
    this.meshes = getElementMeshes({
      elementSettings: this.elementSettings,
      elementMeshes: this.elementMeshes ?? [],
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

  update(elementSettings: D, dimensionZ: number) {
    this.elementSettings = elementSettings;
    this.dimensionZ = dimensionZ;
    this.resize();
  }

  render(progress: number = 0, entryProgress: number = 0, opacity: number = 0) {
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
