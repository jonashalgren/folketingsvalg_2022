import { writable } from "svelte/store";
import type { RAF } from "@models";
import { getUniqId } from "@helpers";

export const _rAF = (function () {
  let timeStamp = 0;
  let callbacks = [];

  const { subscribe, update } = writable<RAF[]>([]);

  subscribe((updatedCallbacks) => (callbacks = updatedCallbacks));

  function handleCallbacks(time: number) {
    timeStamp = time;
    for (let i = 0; i < callbacks.length; i++) {
      const { throttleMS, invokeTimer, callback } = callbacks[i];
      if (time > invokeTimer) {
        callbacks[i].invokeTimer = invokeTimer + throttleMS;
        callback();
      }
    }
    requestAnimationFrame(handleCallbacks);
  }

  requestAnimationFrame(handleCallbacks);

  return {
    add: (callback: () => void, throttleMS = 0) => {
      const requestId = getUniqId();
      update(function (callbacks) {
        return [...callbacks, { callback, throttleMS, invokeTimer: timeStamp, id: requestId }];
      });

      return function remove() {
        update((callbacks) => callbacks.filter((item) => requestId !== item.id));
      };
    },
  };
})();
