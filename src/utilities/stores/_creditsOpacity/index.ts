import { derived } from "svelte/store";
import { _contentDOMElement, _viewport, _scrollY } from "@stores";
import { interpolate } from "popmotion";
import { getElementOffsets } from "@helpers";

export const _creditsOpacity = derived(
  [_contentDOMElement, _viewport, _scrollY],
  ([$_contentDOMElement, $_viewport, $_scrollY]) => {
    let bottom = 0;

    if ($_contentDOMElement) {
      const { children } = $_contentDOMElement;
      const lastChildElement = children[children.length - 1] as HTMLDivElement;
      bottom = getElementOffsets({ element: lastChildElement }).elementOffsetBottom;
    }

    return interpolate([bottom - $_viewport.h * 0.75, bottom - $_viewport.h * 0.3], [0, 1])($_scrollY);
  }
);
