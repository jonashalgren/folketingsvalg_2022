import type { S_E_Mesh, S_Settings, S_Progress, S_S_Element } from "@models";
import type { Group } from "three";
import { getElementGroup } from "./getElementGroup";

export class Scene_Element<D extends S_S_Element, M extends S_E_Mesh[]> {
  animate: (progress: S_Progress) => void;
  group: Group;
  localProgress: number | undefined;
  constructor(public elementSettings: D, public meshesTemplate: M, public sceneSettings: S_Settings) {
    this.animate = function () {};
    this.elementSettings = elementSettings;
    this.sceneSettings = sceneSettings;
    this.localProgress = undefined;
    this.group = getElementGroup({ meshesTemplate: this.meshesTemplate, elementSettings: this.elementSettings }).group;
  }
}
