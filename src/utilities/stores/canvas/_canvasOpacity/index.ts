import { derived } from "svelte/store";
import { _textSectionsOffsets, _viewport, _scrollY } from "@stores";
import { interpolate } from "popmotion";

export const _canvasCreditOpacity = derived(
  [_textSectionsOffsets, _viewport, _scrollY],
  ([$_textSectionsOffsets, $_viewport, $_scrollY]) => {
    const bottom = $_textSectionsOffsets[$_textSectionsOffsets.length - 1]?.bottom ?? 0;
    return interpolate([bottom - $_viewport.h * 0.75, bottom - $_viewport.h * 0.3], [0, 1])($_scrollY);
  }
);

export const _canvasIntroOpacity = derived(
  [_textSectionsOffsets, _viewport, _scrollY],
  ([$_textSectionsOffsets, $_viewport, $_scrollY]) => {
    const top = $_textSectionsOffsets[0]?.top ?? 0;
    return interpolate([top, top + $_viewport.h * 0.2], [1, 0])($_scrollY);
  }
);
