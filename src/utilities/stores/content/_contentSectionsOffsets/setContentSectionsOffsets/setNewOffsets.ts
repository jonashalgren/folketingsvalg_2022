import type { Props } from "./index";
import type { DOM_Element_Offset } from "@models";
import { getElementOffsets } from "@helpers";

export function setNewOffsets(item: Props): Props {
  const list: DOM_Element_Offset[] = Array.from(item.contentDOMElement?.children ?? []).map((element: HTMLElement) => {
    const { elementOffsetTop, elementOffsetBottom } = getElementOffsets({ element });
    return { top: elementOffsetTop, bottom: elementOffsetBottom - item.vh };
  });

  return {
    ...item,
    newOffsets: list.map((item: DOM_Element_Offset, index: number) => {
      const nextTop = list[index + 1]?.top ?? item.bottom + 500;
      const lastEnd = list[index - 1]?.bottom ?? 0;
      return { ...item, nextTop, lastEnd };
    }),
  };
}
