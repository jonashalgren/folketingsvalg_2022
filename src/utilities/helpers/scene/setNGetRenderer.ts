import type { CanvasProperties, Viewport } from "@models";
import { WebGLRenderer } from "three";

type Props = {
  element: HTMLCanvasElement;
  canvasProperties: CanvasProperties;
  viewport: Viewport;
};
export function setNGetRenderer({ element, canvasProperties, viewport }: Props) {
  const { width } = canvasProperties;
  const { w, h } = viewport;
  if (element) {
    const renderer = new WebGLRenderer({
      antialias: true,
      canvas: element,
      logarithmicDepthBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, h);
    renderer.setPixelRatio(w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
    return renderer;
  } else {
    return undefined;
  }
}
