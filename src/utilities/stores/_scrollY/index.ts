import { writable } from "svelte/store";
import { _rAF } from "@stores";

export const _scrollY = (function () {
  const { subscribe, update } = writable(window.scrollY);

  const setScroll = () => update(() => window.scrollY);

  _rAF.add(setScroll);
  return { subscribe };
})();
