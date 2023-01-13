import { writable } from "svelte/store";
import { _rAF } from "@stores";

export const _scrollY = (function () {
  const { set, subscribe } = writable(window.scrollY);

  const setScroll = () => set(window.scrollY);

  _rAF.add(setScroll);
  return { subscribe };
})();
