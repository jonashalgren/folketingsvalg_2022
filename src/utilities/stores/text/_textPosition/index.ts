import { writable } from "svelte/store";
import { _rAF, _textElement, _viewport } from "@stores";
import { setTextPosition } from "./setTextPosition";
import type { TextPosition } from "@models";

export const _textPosition = writable<TextPosition[]>([], function start(set) {
  let textElement = undefined;
  let vh = 0;
  let currentTextPosition: TextPosition[] = [];

  _textElement.subscribe((val) => (textElement = val));
  _viewport.subscribe((val) => (vh = val.h));
  _textPosition.subscribe((val) => (currentTextPosition = val));

  const remove = _rAF.add(
    () =>
      setTextPosition({
        currentTextPosition,
        newTextPosition: [],
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
