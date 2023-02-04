import { derived } from "svelte/store";
import { _contentSectionsOffsets, _viewport, _scrollY } from "@stores";
import { interpolate } from "popmotion";

export const _introOpacity = derived(
  [_contentSectionsOffsets, _viewport, _scrollY],
  ([$_contentSectionsOffsets, $_viewport, $_scrollY]) => {
    const top = $_contentSectionsOffsets[0]?.top ?? 0;
    return interpolate([top, top + $_viewport.h * 0.2], [1, 0])($_scrollY);
  }
);
