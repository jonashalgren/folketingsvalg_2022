import type { WebGLRenderer } from "three";
import type { Scene } from "@classes";
import { get } from "svelte/store";
import { _isAnimating, _scrollY } from "@stores";

type Props = {
  sceneBackground: any;
  nextScene: Scene;
  currentScene: Scene;
  renderer: WebGLRenderer;
};
export function getAnimateFunction({ currentScene, nextScene, renderer, sceneBackground }: Props) {
  let lastScroll = undefined;
  return function () {
    const scrollY = get(_scrollY);
    if (lastScroll !== scrollY || get(_isAnimating)) {
      lastScroll = scrollY;
      sceneBackground.render({ renderer });
      renderer.autoClear = false;
      renderer.clearDepth();

      nextScene.render({ renderer, scrollY });
      currentScene.render({ renderer, scrollY });
      renderer.autoClear = true;
    }
  };
}
