import { Scene_Element } from "@classes";
import type { S_E_M_Box, S_S_E_Box, S_Settings } from "@models";
import { getMapperScale } from "./getMapperScale";
import { getMapperPosition } from "./getMapperPosition";
import { getMapperFloatingYOffset } from "./getMapperFloatingYOffset";
import { getProcessedBoxSettings } from "./getProcessedBoxSettings";
import type { Vector3Tuple } from "three";
import { degreesToRadians } from "popmotion";
import { spring } from "svelte/motion";
import type { Spring } from "svelte/motion";
import { get } from "svelte/store";

export class Scene_Element_Box extends Scene_Element<S_S_E_Box, S_E_M_Box[]> {
  mapperScale: (progress: number) => Vector3Tuple;
  mapperPosition: (progress: number) => Vector3Tuple;
  mapperFloatingYOffset: (progress: number) => number;

  floatingYDirection: "up" | "down";
  floatingYOffsetProgress: number;
  floatingProgress: Spring<number>;

  constructor(
    public boxSettings: S_S_E_Box,
    public meshesTemplate: S_E_M_Box[],
    public sceneSettings: S_Settings,
    public index: number
  ) {
    super(boxSettings, meshesTemplate, sceneSettings);
    this.boxSettings = getProcessedBoxSettings({ boxSettings, sceneSettings });
    this.floatingYDirection = Math.random() > 0.5 ? "down" : "up";
    this.floatingYOffsetProgress = Math.random();
    this.floatingProgress = spring(0, {
      stiffness: 0.01,
      precision: 0.001,
    });

    this.mapperPosition = getMapperPosition({ boxSettings: this.boxSettings });
    this.mapperScale = getMapperScale({ boxSettings: this.boxSettings });
    this.mapperFloatingYOffset = getMapperFloatingYOffset({ boxSettings: this.boxSettings });

    this.setGroupProperties();
    this.setAnimate();
  }

  setGroupProperties() {
    if (this.boxSettings?.rotation) {
      this.group.children[0].rotation.set(
        degreesToRadians(this.boxSettings.rotation[0]),
        degreesToRadians(this.boxSettings.rotation[1]),
        degreesToRadians(this.boxSettings.rotation[2])
      );
    }
  }

  setFloatingYOffsetProgress() {
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

  setAnimate() {
    this.animate = (progress: number) => {
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
    };
  }
}
