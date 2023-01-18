import type { WebGLRenderer } from "three";
import type { Scene } from "@classes";
import { get } from "svelte/store";
import { _scrollY } from "@stores";

type Props = {
  scenes: Scene[];
  renderer: WebGLRenderer;
};
export function getAnimateFunction({ scenes, renderer }: Props) {
  return function () {
    const scrollY = get(_scrollY);
    renderer.autoClear = false;
    renderer.clearDepth();
    scenes.forEach((scene) => scene.render({ renderer, scrollY }));
    renderer.autoClear = true;
  };
}
