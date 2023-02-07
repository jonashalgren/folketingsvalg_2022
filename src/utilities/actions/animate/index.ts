import type { C_S_E_Mesh_Templates, Viewport, C_S_Settings } from "@models";
import { _rAF } from "@stores";
import { Canvas } from "@classes";
type Props = {
  scenesSettings: C_S_Settings[];
  sceneElementsMeshTemplates: C_S_E_Mesh_Templates;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export function animate(canvasDOMElement: HTMLCanvasElement, item: Props) {
  const { scenesSettings, sceneElementsMeshTemplates, contentDOMElement, viewport } = item;
  const canvas = new Canvas(scenesSettings, canvasDOMElement, contentDOMElement, sceneElementsMeshTemplates, viewport);

  let unsubscribe = function () {};
  unsubscribe = _rAF.add(() => canvas.animate());
  return {
    update({ viewport }: Props) {
      canvas.update(viewport);
      unsubscribe();
      unsubscribe = _rAF.add(() => canvas.animate());
    },
  };
}
