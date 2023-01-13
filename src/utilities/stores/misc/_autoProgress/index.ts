import { writable, get } from "svelte/store";
import { _rAF, _scrollY } from "@stores";

export const _autoProgress = (function () {
  const { set, subscribe } = writable(window.scrollY);
  let progress = 0;
  function setAutoProgress() {
    progress += 0.00119;
    if (progress > 1) {
      progress = 1;
    }
    set(progress);
    if (progress >= 1) {
      progress = 0;
    }
  }

  _rAF.add(setAutoProgress);
  return { subscribe };
})();

export const _introAutoProgress = (function () {
  const { set, subscribe } = writable(window.scrollY);
  let localScrollY = get(_scrollY);
  let progress = 0;
  let isScrolling = false;

  function setIsScrolling() {
    isScrolling = localScrollY !== get(_scrollY);
  }

  function setIntroAutoProgress() {
    if (get(_scrollY) !== localScrollY) {
      isScrolling = true;
    }

    if (!isScrolling) {
      progress += 0.00119;
      if (progress > 1) {
        progress = 1;
      }
      set(progress);
      if (progress >= 1) {
        progress = 0;
      }
    } else {
      localScrollY = get(_scrollY);
    }
  }

  _rAF.add(setIsScrolling, 500);
  _rAF.add(setIntroAutoProgress);
  return { subscribe };
})();
