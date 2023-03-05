import { Canvas_Scene_Element } from "@classes_abstract";
import type { C_S_E_Mesh_Text, C_S_S_Element_Text } from "@models";
import { getProcessedTextSettings } from "./getProcessedTextSettings";
import { Text } from "troika-three-text";
import type { Vector3Tuple } from "three";
import { degreesToRadians } from "popmotion";

type Props = {
  elementSettings: C_S_S_Element_Text;
  dimensionZ: number;
};

export class Canvas_Scene_Element_Text extends Canvas_Scene_Element<C_S_S_Element_Text, C_S_E_Mesh_Text[]> {
  mapperValue: (progress: number) => number;
  mapperColor: (progress: number) => string;
  mapperSize: (progress: number) => number;
  mapperPosition: (progress: number) => Vector3Tuple;

  constructor(props: Props) {
    super(props);
    this.setElementSettings();
    this.setText();
  }

  private setElementSettings() {
    this.elementSettings = getProcessedTextSettings({
      elementSettings: this.elementSettings,
      dimensionZ: this.dimensionZ,
    });
  }

  private setText() {
    this.meshes = [new Text()];
    this.meshes[0].text = this.elementSettings.text;
    this.meshes[0].font = this.elementSettings.font;
    this.meshes[0].fontSize = this.elementSettings.fontSize;
    this.meshes[0].textAlign = this.elementSettings.textAlign;
    this.meshes[0].anchorX = "center";
    this.meshes[0].anchorY = "middle";
    this.meshes[0].maxWidth = this.elementSettings.maxWidth;
    this.meshes[0].rotation.set(
      degreesToRadians(this.elementSettings.rotation[0]),
      degreesToRadians(this.elementSettings.rotation[1]),
      degreesToRadians(this.elementSettings.rotation[2])
    );
    this.meshes[0].color = this.elementSettings.color;
    this.setTextPosition();
  }

  private setTextPosition() {
    this.meshes[0].position.set(...this.elementSettings.position);
  }

  resizing() {
    this.setElementSettings();
    this.setTextPosition();
  }

  animating() {}
}
