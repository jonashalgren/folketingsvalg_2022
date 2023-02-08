import type { C_S_E_Details, Viewport } from "@models";
import { _rAF } from "@stores";
import { Canvas } from "@classes";
import { tick } from "svelte";

type Props = {
  canvasSceneElementsDetails: C_S_E_Details;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export function animate(canvasDOMElement: HTMLCanvasElement, item: Props) {
  const canvas = new Canvas(canvasDOMElement, item.contentDOMElement, item.canvasSceneElementsDetails, item.viewport);

  let unsubscribe = function () {};
  unsubscribe = _rAF.add(() => canvas.animate());
  return {
    async update({ viewport }: Props) {
      await tick();
      canvas.update(viewport);
      unsubscribe();
      unsubscribe = _rAF.add(() => canvas.animate());
    },
  };
}
