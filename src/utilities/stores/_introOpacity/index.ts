import { derived } from "svelte/store";
import { _contentDOMElement, _viewport, _scrollY } from "@stores";
import { interpolate } from "popmotion";
import { getElementOffsets } from "@helpers";

export const _introOpacity = derived(
  [_contentDOMElement, _viewport, _scrollY],
  ([$_contentDOMElement, $_viewport, $_scrollY]) => {
    let top = 0;

    if ($_contentDOMElement) {
      const { children } = $_contentDOMElement;
      const firstChildElement = children[0] as HTMLDivElement;
      top = getElementOffsets({ element: firstChildElement }).elementOffsetTop;
    }

    return interpolate([top, top + $_viewport.h * 0.2], [1, 0])($_scrollY);
  }
);
