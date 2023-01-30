import { Scene_Element } from "@classes";
import type { S_E_Box_Mesh, S_E_Box_Data, S_Progress } from "@models";
import { getMapperScale } from "./getMapperScale";
import { getMapperPosition } from "./getMapperPosition";
import { getMapperFloatingYOffset } from "./getMapperFloatingYOffset";
import { getProcessedBoxData } from "./getProcessedBoxData";
import type { Vector3Tuple } from "three";
import { degreesToRadians } from "popmotion";
import { spring } from "svelte/motion";
import type { Spring } from "svelte/motion";
import { get } from "svelte/store";

export class Scene_Element_Box extends Scene_Element<S_E_Box_Data, S_E_Box_Mesh[]> {
  mapperScale: (progress: number) => Vector3Tuple;
  mapperPosition: (progress: number) => Vector3Tuple;
  mapperFloatingYOffset: (progress: number) => number;

  processedBoxData: S_E_Box_Data;
  floatingYDirection: "up" | "down";
  floatingYOffsetProgress: number;
  floatingProgress: Spring<number>;

  constructor(
    public data: S_E_Box_Data,
    public originalMeshes: S_E_Box_Mesh[],
    public dimensionZ: number,
    public index: number
  ) {
    super(data, originalMeshes, dimensionZ);
    this.processedBoxData = getProcessedBoxData({ data, dimensionZ });
    this.floatingYDirection = Math.random() > 0.5 ? "down" : "up";
    this.floatingYOffsetProgress = Math.random();
    this.floatingProgress = spring(0, {
      stiffness: 0.01,
      precision: 0.001,
    });

    this.mapperPosition = getMapperPosition({ data: this.processedBoxData });
    this.mapperScale = getMapperScale({ data: this.processedBoxData });
    this.mapperFloatingYOffset = getMapperFloatingYOffset({ data: this.processedBoxData });

    this.setGroupProperties();
    this.setAnimate();
  }

  setGroupProperties() {
    if (this.data?.rotation) {
      this.group.children[0].rotation.set(
        degreesToRadians(this.data.rotation[0]),
        degreesToRadians(this.data.rotation[1]),
        degreesToRadians(this.data.rotation[2])
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
    this.animate = (prog: S_Progress) => {
      let progress = prog.main;
      if (this.data.isFloating) {
        this.setFloatingYOffsetProgress();
        this.floatingProgress.set(progress);
        progress = get(this.floatingProgress);
      }

      if (this.localProgress !== progress || this.data.isFloating) {
        this.localProgress = progress;
        const scale = this.mapperScale(progress);
        const position = this.mapperPosition(progress);
        const floatingYOffset = this.mapperFloatingYOffset(this.floatingYOffsetProgress);
        this.group.children[0].scale.set(
          scale[0] * this.data.size + 0.001 * this.index,
          scale[1] * this.data.size + 0.001 * this.index,
          scale[2] * 0.8 + 0.001 * this.index
        );
        this.group.children[0].position.set(
          position[0] - ((scale[0] - 1) * this.data.size) / 2,
          position[1] - ((scale[1] - 1) * this.data.size) / 2 + floatingYOffset,
          position[2] + (scale[2] * 0.8) / 2
        );
      }
    };
  }
}
