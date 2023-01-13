import { writable } from "svelte/store";
import { _rAF, _textElement, _viewport } from "@stores";
import { setTextElementChildrenOffsets } from "./getTextElementChildrenOffsets";
import type { ElementOffset } from "@models";

export const _textElementChildrenOffsets = writable<ElementOffset[]>([], function start(set) {
  let textElement = undefined;
  let vh = 0;
  let currentTextElementChildrenOffsets: ElementOffset[] = [];

  _textElement.subscribe((val) => (textElement = val));
  _viewport.subscribe((val) => (vh = val.h));
  _textElementChildrenOffsets.subscribe((val) => (currentTextElementChildrenOffsets = val));

  const remove = _rAF.add(
    () =>
      setTextElementChildrenOffsets({
        currentTextElementChildrenOffsets,
        newTextElementChildrenOffsets: [],
        textElement,
        set,
        vh,
      }),
    2000
  );

  return () => {
    remove();
  };
});
