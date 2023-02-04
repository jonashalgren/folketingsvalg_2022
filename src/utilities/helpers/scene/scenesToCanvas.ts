import type { Viewport, Canvas_Settings } from "@models";
import type { Scene } from "@classes";
import { WebGLRenderer } from "three";
import { _rAF } from "@stores";
import { getScenesAnimate } from "@helpers";

type Props = {
  viewport: Viewport;
  canvasSettings: Canvas_Settings;
  scenes: Scene[];
};

export function scenesToCanvas(canvas: HTMLCanvasElement, {}: Props) {
  const renderer = new WebGLRenderer({ antialias: true, canvas, logarithmicDepthBuffer: true });
  let unsubscribe = function () {};
  return {
    update({ viewport, canvasSettings, scenes }: Props) {
      const animate = getScenesAnimate({ scenes, renderer });

      renderer.setSize(canvasSettings.width, viewport.h);
      renderer.setPixelRatio(viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);

      scenes.forEach((item) => renderer.compile(item.scene, item.camera));

      unsubscribe();
      unsubscribe = _rAF.add(animate, 16.6);
    },
  };
}
