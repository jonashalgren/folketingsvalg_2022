import type { WebGLRenderer } from "three";
import type { Scene } from "@classes";
import { get } from "svelte/store";
import { _isAnimating, _scrollY } from "@stores";

type Props = {
  sceneBackground: any;
  scenes: Scene[];
  renderer: WebGLRenderer;
};
export function getAnimateFunction({ scenes, renderer, sceneBackground }: Props) {
  let lastScroll = undefined;
  return function () {
    const scrollY = get(_scrollY);
    if (lastScroll !== scrollY || get(_isAnimating)) {
      lastScroll = scrollY;
      sceneBackground.render({ renderer });
      renderer.autoClear = false;
      renderer.clearDepth();
      scenes.forEach((scene) => scene.render({ renderer, scrollY }));
      renderer.autoClear = true;
    }
  };
}
