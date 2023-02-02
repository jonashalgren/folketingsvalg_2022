import { derived } from "svelte/store";
import { _viewport } from "@stores";
import type { CanvasSettings } from "@models";

export const _canvasSettings = derived(_viewport, ($_viewport): CanvasSettings => {
  const { h, w } = $_viewport;
  const hasOffset = (h * 1.2) / w < 1;
  const left = -(hasOffset ? ((h / w) * w) / 4 : 0);
  const width = left + w;
  return {
    left,
    width,
    height: h,
  };
});
