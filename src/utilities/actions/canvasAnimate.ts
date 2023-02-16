import type { C_Scene_Settings, C_S_Elements_Meshes, Viewport } from "@models";
import { _rAF } from "@stores";
import { Canvas } from "@classes";
import { tick } from "svelte";

type Props = {
  scenesSettings: C_Scene_Settings[];
  elementsMeshes: C_S_Elements_Meshes;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export function canvasAnimate(canvasDOMElement: HTMLCanvasElement, item: Props) {
  const canvas = new Canvas(canvasDOMElement, item.contentDOMElement, item.scenesSettings, item.elementsMeshes, item.viewport);

  let unsubscribe = function () {};
  unsubscribe = _rAF.add(() => canvas.animate());
  return {
    async update({ viewport }: Props) {
      await tick();
      canvas.resize(viewport);
      unsubscribe();
      unsubscribe = _rAF.add(() => canvas.animate());
    },
  };
}
