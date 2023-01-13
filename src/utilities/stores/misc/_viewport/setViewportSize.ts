import type { Viewport } from "@models";
import type { Subscriber } from "svelte/store";
import { getViewportSize, pipe } from "@helpers";

type Props = {
  currentViewportSize: Viewport;
  newViewportSize: Viewport;
  set: Subscriber<Viewport>;
};

export function setViewportSize(item: Props) {
  return pipe(getNewViewportSize, setNewViewportSize)(item);
}

function getNewViewportSize(item: Props) {
  return {
    ...item,
    newViewportSize: getViewportSize(),
  };
}

function setNewViewportSize({ currentViewportSize, newViewportSize, set }: Props) {
  if (
    newViewportSize.h > currentViewportSize.h ||
    newViewportSize.h < currentViewportSize.h - 200 ||
    newViewportSize.w !== currentViewportSize.w
  ) {
    set(newViewportSize);
  }

  return { currentViewportSize, newViewportSize, set };
}
