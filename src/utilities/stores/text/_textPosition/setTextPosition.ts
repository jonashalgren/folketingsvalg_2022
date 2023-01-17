import type { TextPosition, ElementOffset } from "@models";
import { getElementOffsets, pipe, getIsArraysMatching } from "@helpers";
import type { Subscriber } from "svelte/store";

type Props = {
  newTextPosition: TextPosition[];
  currentTextPosition: TextPosition[];
  textElement: HTMLDivElement;
  vh: number;
  set: Subscriber<TextPosition[]>;
};

export function setTextPosition(item: Props) {
  return pipe(getNewTextPosition, validateNewTextPosition)(item);
}

function getNewTextPosition(item: Props) {
  const list = Array.from(item.textElement?.children ?? []).map((element: HTMLElement) => {
    const { elementOffsetTop, elementOffsetBottom } = getElementOffsets({ element });
    return { top: elementOffsetTop, bottom: elementOffsetBottom - item.vh };
  });

  return {
    ...item,
    newTextPosition: list.map((item: ElementOffset, index: number) => {
      const nextTop = list[index + 1]?.top ?? item.bottom + 500;
      const lastEnd = list[index - 1]?.bottom ?? 0;
      return { ...item, nextTop, lastEnd };
    }),
  };
}

function validateNewTextPosition(item: Props) {
  const currentText = item.currentTextPosition.flatMap((item) => [item.top, item.bottom]);
  const newText = item.newTextPosition.flatMap((item) => [item.top, item.bottom]);
  if (!getIsArraysMatching({ arr1: currentText, arr2: newText })) {
    item.set(item.newTextPosition);
  }
  return item;
}
