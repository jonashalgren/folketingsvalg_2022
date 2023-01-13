import type { ElementOffset } from "@models";
import { getElementOffsets, pipe, getIsArraysMatching } from "@helpers";
import type { Subscriber } from "svelte/store";

type Props = {
  newTextElementChildrenOffsets: ElementOffset[];
  currentTextElementChildrenOffsets: ElementOffset[];
  textElement: HTMLDivElement;
  vh: number;
  set: Subscriber<ElementOffset[]>;
};

export function setTextElementChildrenOffsets(item: Props) {
  return pipe(getNewTextElementChildrenOffsets, setNewTextElementChildrenOffsets)(item);
}

function getNewTextElementChildrenOffsets(item: Props) {
  return {
    ...item,
    newTextElementChildrenOffsets: Array.from(item.textElement?.children ?? []).map(
      (element: HTMLElement) => {
        const { elementOffsetTop, elementOffsetBottom } = getElementOffsets({ element });
        return { top: Math.round(elementOffsetTop), bottom: Math.round(elementOffsetBottom - item.vh) };
      }
    ),
  };
}

function setNewTextElementChildrenOffsets(item: Props) {
  const currentOffsets = item.currentTextElementChildrenOffsets.flatMap((item) => [item.top, item.bottom]);
  const newOffsets = item.newTextElementChildrenOffsets.flatMap((item) => [item.top, item.bottom]);
  if (!getIsArraysMatching({ arr1: currentOffsets, arr2: newOffsets }))
    item.set(item.newTextElementChildrenOffsets);
  return item;
}
