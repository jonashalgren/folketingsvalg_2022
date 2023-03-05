import type { Props } from "./";
import { getElementOffsets } from "@helpers";

function getOffsets({ element, vh }: { element: HTMLDivElement; vh: number }) {
  const { elementOffsetTop, elementOffsetBottom } = getElementOffsets({ element });
  const top = elementOffsetTop;
  const bottom = elementOffsetBottom - vh;
  return { top, bottom };
}

export function setSettings(item: Props) {
  const prevElement = item.contentDOMElement.children[item.sceneIndex - 1] as HTMLDivElement | undefined;
  const element = item.contentDOMElement.children[item.sceneIndex] as HTMLDivElement;
  const nextElement = item.contentDOMElement.children[item.sceneIndex + 1] as HTMLDivElement | undefined;

  const prevOffsets = getOffsets({ element: prevElement ? prevElement : element, vh: item.viewport.h });
  const offsets = getOffsets({ element, vh: item.viewport.h });
  const nextOffsets = getOffsets({ element: nextElement ? nextElement : element, vh: item.viewport.h });

  return {
    ...item,
    settings: {
      mainStart: offsets.top,
      mainEnd: offsets.bottom,
      entryStart: offsets.top === 0 ? offsets.top : Math.round(prevOffsets.bottom),
      exitEnd: Math.round((offsets.bottom + nextOffsets.top) / 2),
    },
  };
}
