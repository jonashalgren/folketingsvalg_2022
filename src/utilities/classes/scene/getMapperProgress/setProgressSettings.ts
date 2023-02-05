import { _scrollY } from "@stores";
import type { Props } from "./index";
import { getElementOffsets } from "@helpers";

export function setProgressSettings(item: Props): Props {
  const { children } = item.contentDOMElement;
  const { index } = item.settings;

  const prevElement = children[index - 1] as HTMLDivElement;
  const element = children[index] as HTMLDivElement;
  const nextElement = children[index + 1] as HTMLDivElement;

  const prevBottom = getElementOffsets({
    element: prevElement ? prevElement : element,
  }).elementOffsetBottom;

  const { elementOffsetTop: top, elementOffsetBottom: bottom } = getElementOffsets({ element });

  const nextTop = getElementOffsets({
    element: nextElement ? nextElement : element,
  }).elementOffsetTop;

  return {
    ...item,
    progressSettings: {
      mainStart: top,
      mainEnd: bottom,
      entryStart: top === 0 ? top : Math.round(prevBottom),
      exitEnd: Math.round((bottom + nextTop) / 2),
    },
  };
}
