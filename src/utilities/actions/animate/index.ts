import type { C_S_E_Mesh_Templates, Viewport } from "@models";
import { _rAF } from "@stores";
import { Canvas } from "@classes";
import { tick } from "svelte";

type Props = {
  sceneElementsMeshTemplates: C_S_E_Mesh_Templates;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export function animate(canvasDOMElement: HTMLCanvasElement, item: Props) {
  const { sceneElementsMeshTemplates, contentDOMElement, viewport } = item;
  const canvas = new Canvas(canvasDOMElement, contentDOMElement, sceneElementsMeshTemplates, viewport);

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
