import { readable } from "svelte/store";
import type { Viewport } from "@models";
import { getInitialViewportSize, debounce } from "@helpers";
import { setViewportSize } from "./setViewportSize";
import { _rAF } from "@stores";

export const _viewport = readable<Viewport>(getInitialViewportSize(), function start(set) {
  let currentViewportSize = { w: 0, h: 0 };
  _viewport.subscribe((val) => (currentViewportSize = val));

  const setter = debounce(
    () =>
      setViewportSize({
        currentViewportSize,
        newViewportSize: { h: 0, w: 0 },
        set,
      }),
    500
  );

  const remove = _rAF.add(setter, 4000);
  addEventListener("resize", setter);

  return () => {
    remove();
    removeEventListener("resize", setter);
  };
});
