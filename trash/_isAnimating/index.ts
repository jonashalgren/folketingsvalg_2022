import type { Readable } from "svelte/store";
import { derived } from "svelte/store";
import { _sceneData, _sceneActive } from "@stores";

export const _isAnimating: Readable<boolean> = derived(
  [_sceneData, _sceneActive],
  ([$_sceneData, $_sceneActive], set) => {
    const item = $_sceneData[$_sceneActive];
    const isAnimating = <boolean>(
      (item.mode === "auto" || item?.isPartyFloating === true || "focus" in item || "part" in item)
    );
    set(isAnimating);
  }
);
