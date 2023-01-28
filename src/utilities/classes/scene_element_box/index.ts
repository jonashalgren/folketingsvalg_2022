import { Scene_Element } from "@classes";
import type { S_E_Box_Mesh, S_E_Box_Data, S_Progress } from "@models";
import { getScaleMapper } from "./getScaleMapper";
import { getPositionMapper } from "./getPositionMapper";
import { getFloatingYOffsetMapper } from "./getFloatingYOffsetMapper";
import type { Vector3Tuple } from "three";
import { degreesToRadians } from "popmotion";
import { spring } from "svelte/motion";
import type { Spring } from "svelte/motion";
import { get } from "svelte/store";

export class Scene_Element_Box extends Scene_Element<S_E_Box_Data, S_E_Box_Mesh[], number> {
  scaleMapper: (progress: number) => Vector3Tuple;
  positionMapper: (progress: number) => Vector3Tuple;
  floatingYOffsetMapper: (progress: number) => number;

  floatingYDirection: "up" | "down";
  floatingYOffsetProgress: number;
  localProgress: number | undefined;
  floatingProgress: Spring<number>;
  mesh: S_E_Box_Mesh;

  constructor(public data: S_E_Box_Data, public originalMeshes: S_E_Box_Mesh[], index: number) {
    super(data, originalMeshes, index);
    this.mesh = this.group.children[0] as S_E_Box_Mesh;
    this.localProgress = undefined;
    this.floatingYDirection = Math.random() > 0.5 ? "down" : "up";
    this.floatingYOffsetProgress = Math.random();
    this.floatingProgress = spring(0, {
      stiffness: 0.01,
      precision: 0.001,
    });

    this.positionMapper = getPositionMapper({ data: this.data });
    this.scaleMapper = getScaleMapper({ data: this.data });
    this.floatingYOffsetMapper = getFloatingYOffsetMapper({ size: this.data.size });

    this.setGroupProperties();
    this.setAnimate();
  }

  setGroupProperties() {
    if (this.data?.rotation) {
      this.mesh.rotation.set(
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
        const scale = this.scaleMapper(progress);
        const position = this.positionMapper(progress);
        const floatingYOffset = this.floatingYOffsetMapper(this.floatingYOffsetProgress);
        this.mesh.scale.set(
          scale[0] * this.data.size + 0.001 * this.index,
          scale[1] * this.data.size + 0.001 * this.index,
          scale[2] * 0.8 + 0.001 * this.index
        );
        this.mesh.position.set(
          position[0] - ((scale[0] - 1) * this.data.size) / 2,
          position[1] - ((scale[1] - 1) * this.data.size) / 2 + floatingYOffset,
          position[2] + (scale[2] * 0.8) / 2
        );
      }
    };
  }
}
