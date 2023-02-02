import type { Viewport } from "@models";
import type { Subscriber } from "svelte/store";
import { getViewportSize } from "./getViewportSize";

type Props = {
  currentViewportSize: Viewport;
  set: Subscriber<Viewport>;
};

export function setViewportSize({ currentViewportSize, set }: Props) {
  const newViewportSize = getViewportSize();
  if (
    newViewportSize.h > currentViewportSize.h ||
    newViewportSize.h < currentViewportSize.h - 200 ||
    newViewportSize.w !== currentViewportSize.w
  ) {
    set(newViewportSize);
  }
}
