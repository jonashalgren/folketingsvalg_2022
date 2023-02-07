import type { S_E_Mesh_Templates, Viewport, S_Settings } from "@models";
import { _rAF } from "@stores";
import { Canvas } from "@classes";
type Props = {
  scenesSettings: S_Settings[];
  sceneElementsMeshTemplates: S_E_Mesh_Templates;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export function animate(canvasDOMElement: HTMLCanvasElement, item: Props) {
  const { scenesSettings, sceneElementsMeshTemplates, contentDOMElement, viewport } = item;
  const canvas = new Canvas(scenesSettings, canvasDOMElement, contentDOMElement, sceneElementsMeshTemplates, viewport);

  let unsubscribe = function () {};
  unsubscribe = _rAF.add(() => canvas.animate());
  return {
    update() {
      unsubscribe();
      unsubscribe = _rAF.add(() => canvas.animate());
    },
  };
}
