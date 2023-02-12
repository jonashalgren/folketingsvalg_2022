import type { C_C_Element_Details, Viewport } from "@models";
import { _rAF } from "@stores";
import { Canvas } from "@classes";
import { tick } from "svelte";

type Props = {
  canvasContentElementsDetails: C_C_Element_Details;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export function canvasAnimate(canvasDOMElement: HTMLCanvasElement, item: Props) {
  const canvas = new Canvas(canvasDOMElement, item.contentDOMElement, item.canvasContentElementsDetails, item.viewport);

  let unsubscribe = function () {};
  unsubscribe = _rAF.add(() => canvas.update());
  return {
    async update({ viewport }: Props) {
      await tick();
      canvas.resize(viewport);
      unsubscribe();
      unsubscribe = _rAF.add(() => canvas.update());
    },
  };
}
