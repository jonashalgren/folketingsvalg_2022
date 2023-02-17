import { Canvas_Scene_Element } from "@classes_abstract";
import type { C_S_E_Mesh_Text, C_Scene_Settings, C_S_S_Element_Number } from "@models";
import { getProcessedNumberSettings } from "./getProcessedNumberSettings";
import { getValue } from "./getValue";
import { Text } from "troika-three-text";
import type { Vector3Tuple } from "three";
import { degreesToRadians, interpolate } from "popmotion";

export class Canvas_Scene_Element_Number extends Canvas_Scene_Element<C_S_S_Element_Number, C_S_E_Mesh_Text[]> {
  mapperValue: (progress: number) => number;
  mapperColor: (progress: number) => string;
  mapperSize: (progress: number) => number;
  mapperPosition: (progress: number) => Vector3Tuple;

  constructor(elementSettings: C_S_S_Element_Number, sceneSettings: C_Scene_Settings) {
    super(elementSettings, [], sceneSettings, 0);
    this.setElementSettings();
    this.setText();
    this.setMapperValue();
    this.setMapperColor();
    this.setMapperSize();
    this.setMapperPosition();
  }

  private setElementSettings() {
    this.elementSettings = getProcessedNumberSettings({
      elementSettings: this.elementSettings,
      sceneSettings: this.sceneSettings,
    });
  }

  private setText() {
    this.meshes = [new Text()];
    this.meshes[0].text = "";
    this.meshes[0].font = this.elementSettings.font;
    this.meshes[0].textAlign = this.elementSettings.textAlign;
    this.meshes[0].anchorX = "center";
    this.meshes[0].anchorY = "middle";
    this.meshes[0].maxWidth = 100;
    this.meshes[0].rotation.set(
      degreesToRadians(this.elementSettings.rotation[0]),
      degreesToRadians(this.elementSettings.rotation[1]),
      degreesToRadians(this.elementSettings.rotation[2])
    );
  }

  setMapperValue() {
    this.mapperValue = interpolate(this.elementSettings.motion.value.inputRange, this.elementSettings.motion.value.outputRange);
  }

  setMapperColor() {
    this.mapperColor = interpolate(this.elementSettings.motion.color.inputRange, this.elementSettings.motion.color.outputRange);
  }

  setMapperSize() {
    this.mapperSize = interpolate(this.elementSettings.motion.size.inputRange, this.elementSettings.motion.size.outputRange);
  }

  setMapperPosition() {
    this.mapperPosition = interpolate(this.elementSettings.motion.position.inputRange, this.elementSettings.motion.position.outputRange);
  }

  resize(elementSettings: C_S_S_Element_Number, sceneSettings: C_Scene_Settings) {
    this.elementSettings = elementSettings;
    this.sceneSettings = sceneSettings;
    this.setElementSettings();
    this.setMapperPosition();
  }

  animate(progress: number) {
    this.meshes[0].text = getValue({ value: this.mapperValue(progress), decimals: this.elementSettings.decimals, unit: this.elementSettings.unit });
    this.meshes[0].color = this.mapperColor(progress);
    this.meshes[0].fontSize = this.mapperSize(progress);
    this.meshes[0].position.set(...this.mapperPosition(progress));
  }
}
