import { readable } from "svelte/store";
import type { Viewport } from "@models";
import { getInitialViewportSize } from "./getInitialViewportSize";
import { setViewportSize } from "./setViewportSize";
import { _rAF } from "@stores";

export const _viewport = readable<Viewport>(getInitialViewportSize(), function start(set) {
  let currentViewportSize = { w: 0, h: 0 };
  _viewport.subscribe((val) => (currentViewportSize = val));

  const remove = _rAF.add(() => setViewportSize({ currentViewportSize, set }), 1000);

  return () => {
    remove();
  };
});
