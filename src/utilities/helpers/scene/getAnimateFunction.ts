import type { WebGLRenderer } from "three";
import type { Scene } from "@classes";

type Props = {
  scenes: Scene[];
  renderer: WebGLRenderer;
};
export function getAnimateFunction({ scenes, renderer }: Props) {
  return function () {
    renderer.autoClear = false;
    renderer.clearDepth();
    scenes.forEach((scene) => scene.render({ renderer }));
    renderer.autoClear = true;
  };
}
