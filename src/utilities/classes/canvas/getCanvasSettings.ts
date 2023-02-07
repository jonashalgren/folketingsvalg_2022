import type { Viewport } from "@models";

type Props = {
  viewport: Viewport;
};

export function getCanvasSettings({ viewport }: Props) {
  const hasOffset = (viewport.h * 1.2) / viewport.w < 1;
  const left = -(hasOffset ? ((viewport.h / viewport.w) * viewport.w) / 4 : 0);
  const width = -left + viewport.w;
  return { left, width, height: viewport.h };
}
