import { derived } from "svelte/store";
import { _contentSectionsOffsets, _viewport, _scrollY } from "@stores";
import { interpolate } from "popmotion";

export const _creditsOpacity = derived(
  [_contentSectionsOffsets, _viewport, _scrollY],
  ([$_contentSectionsOffsets, $_viewport, $_scrollY]) => {
    const bottom = $_contentSectionsOffsets[$_contentSectionsOffsets.length - 1]?.bottom ?? 0;
    return interpolate([bottom - $_viewport.h * 0.75, bottom - $_viewport.h * 0.3], [0, 1])($_scrollY);
  }
);
