import type { Props } from "../index";
import { getElementBoxes } from "./getElementBoxes";
import { getElementMap } from "./getElementMap";
import { getElementNumbers } from "./getElementNumbers";
import { getElementTexts } from "./getElementTexts";
import { getElementFigures } from "./getElementFigures";

export function setElements(item: Props): Props {
  const { dimensionZ, elements } = item.data;
  return {
    ...item,
    data: {
      ...item.data,
      elements: {
        ...item.data.elements,
        boxes: getElementBoxes({ boxes: elements.boxes, dimensionZ }),
        map: getElementMap({ map: elements.map, dimensionZ }),
        numbers: getElementNumbers({ numbers: elements.numbers, dimensionZ }),
        texts: getElementTexts({ texts: elements.texts, dimensionZ }),
        figures: getElementFigures({ figures: elements.figures }),
      },
    },
  };
}
