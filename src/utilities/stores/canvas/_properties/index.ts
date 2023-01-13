import { derived } from "svelte/store";
import { _viewport } from "@stores";
import type { CanvasProperties } from "@models";
import { getFontMultiplier } from "./getFontMultiplier";

export const _canvasProperties = derived(_viewport, ($_viewport): CanvasProperties => {
  const { h, w } = $_viewport;
  const hasOffset = (h * 1.2) / w < 1;
  const left = hasOffset ? ((h / w) * w) / 4 : 0;
  const width = left + w;
  const fontMultiplier = getFontMultiplier({ wWidth: w });
  return {
    left,
    width,
    height: h,
    fontMultiplier,
  };
});
