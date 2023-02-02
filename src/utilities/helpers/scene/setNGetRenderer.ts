import type { CanvasSettings, Viewport } from "@models";
import { WebGLRenderer } from "three";

type Props = {
  element: HTMLCanvasElement;
  canvasSettings: CanvasSettings;
  viewport: Viewport;
};
export function setNGetRenderer({ element, canvasSettings, viewport }: Props) {
  if (element) {
    const renderer = new WebGLRenderer({
      antialias: true,
      canvas: element,
      logarithmicDepthBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(canvasSettings.width, viewport.h);
    renderer.setPixelRatio(viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
    return renderer;
  } else {
    return undefined;
  }
}
