import type { Viewport } from "@models";

export function getViewportSize(): Viewport {
  return {
    w: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    h: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  };
}
