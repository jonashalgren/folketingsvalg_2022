import { Canvas_Content_Element } from "@classes_abstract";
import type { C_C_E_Mesh_Box, C_C_S_Element_Box, C_Content_Settings } from "@models";
import { getMapperScale } from "./getMapperScale";
import { getMapperPosition } from "./getMapperPosition";
import { getMapperFloatingYOffset } from "./getMapperFloatingYOffset";
import { getProcessedBoxSettings } from "./getProcessedBoxSettings";
import type { Vector3Tuple } from "three";
import { degreesToRadians } from "popmotion";
import { spring } from "svelte/motion";
import type { Spring } from "svelte/motion";
import { get } from "svelte/store";

export class Canvas_Content_Box extends Canvas_Content_Element<C_C_S_Element_Box, C_C_E_Mesh_Box[]> {
  private mapperScale: (progress: number) => Vector3Tuple;
  private mapperPosition: (progress: number) => Vector3Tuple;
  private mapperFloatingYOffset: (progress: number) => number;

  private floatingYDirection: "up" | "down";
  private floatingYOffsetProgress: number;
  private floatingProgress: Spring<number>;

  constructor(public boxSettings: C_C_S_Element_Box, public meshesTemplate: C_C_E_Mesh_Box[], public contentSettings: C_Content_Settings, public index: number) {
    super(boxSettings, meshesTemplate, contentSettings);
    this.setBoxSettings();
    this.setFloatingProperties();
    this.setMapperPosition();
    this.setMapperScale();
    this.setMapperFloatingYOffset();
    this.setRotation();
  }

  private setBoxSettings() {
    this.boxSettings = getProcessedBoxSettings({ boxSettings: this.boxSettings, contentSettings: this.contentSettings });
  }

  private setMapperPosition() {
    this.mapperPosition = getMapperPosition({ boxSettings: this.boxSettings });
  }

  private setMapperScale() {
    this.mapperScale = getMapperScale({ boxSettings: this.boxSettings });
  }

  private setMapperFloatingYOffset() {
    this.mapperFloatingYOffset = getMapperFloatingYOffset({ boxSettings: this.boxSettings });
  }

  private setFloatingProperties() {
    this.floatingYDirection = Math.random() > 0.5 ? "down" : "up";
    this.floatingYOffsetProgress = Math.random();
    this.floatingProgress = spring(0, {
      stiffness: 0.01,
      precision: 0.001,
    });
  }

  private setRotation() {
    if (this.boxSettings?.rotation) {
      this.group.children[0].rotation.set(
        degreesToRadians(this.boxSettings.rotation[0]),
        degreesToRadians(this.boxSettings.rotation[1]),
        degreesToRadians(this.boxSettings.rotation[2])
      );
    }
  }

  private setFloatingYOffsetProgress() {
    if (this.floatingYDirection === "down") {
      this.floatingYOffsetProgress -= 0.002;
      if (this.floatingYOffsetProgress - 0.002 < 0) {
        this.floatingYOffsetProgress = 0;
        this.floatingYDirection = "up";
      }
    } else if (this.floatingYDirection === "up") {
      this.floatingYOffsetProgress += 0.002;
      if (this.floatingYOffsetProgress + 0.002 > 1) {
        this.floatingYOffsetProgress = 1;
        this.floatingYDirection = "down";
      }
    }
  }

  resize(boxSettings: C_C_S_Element_Box) {
    this.boxSettings = boxSettings;

    this.setBoxSettings();
    this.setMapperPosition();
    this.setMapperScale();
    this.setMapperFloatingYOffset();
  }

  animate(progress: number) {
    if (this.boxSettings.isFloating) {
      this.setFloatingYOffsetProgress();
      this.floatingProgress.set(progress);
      progress = get(this.floatingProgress);
    }

    if (this.localProgress !== progress || this.boxSettings.isFloating) {
      this.localProgress = progress;
      const scale = this.mapperScale(progress);
      const position = this.mapperPosition(progress);
      const floatingYOffset = this.mapperFloatingYOffset(this.floatingYOffsetProgress);
      this.group.children[0].scale.set(
        scale[0] * this.boxSettings.size + 0.001 * this.index,
        scale[1] * this.boxSettings.size + 0.001 * this.index,
        scale[2] * 0.8 + 0.001 * this.index
      );
      this.group.children[0].position.set(
        position[0] - ((scale[0] - 1) * this.boxSettings.size) / 2,
        position[1] - ((scale[1] - 1) * this.boxSettings.size) / 2 + floatingYOffset,
        position[2] + (scale[2] * 0.8) / 2
      );
    }
  }
}