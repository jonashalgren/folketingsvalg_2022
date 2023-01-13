import { Box3, Color } from "three";
import type { Props } from "./index";

export function setProperties(item: Props): Props {
  const properties = item.part.map((entry) => {
    const group = item.partProperties.clone();
    const color = new Color(entry.color);

    const box = new Box3();
    box.setFromObject(group);

    const itemHeight = box.max.y - box.min.y;
    const itemWidth = box.max.x - box.min.x;

    const amountPrRow = Math.floor(entry.amount / entry.rows);
    const itemSpace = Math.floor(entry.width / amountPrRow);
    const scale = itemSpace / itemWidth;

    group.children.forEach((item: any) => {
      const material = item.material.clone();
      material.color = color;
      item.material = material;
    });

    return {
      rows: entry.rows,
      scale: scale * 0.95,
      amount: entry.amount,
      inputRange: entry.inputRange,
      itemHeight: itemHeight * scale,
      itemWidth: itemWidth * scale,
      itemsPrRow: amountPrRow,
      items: entry.items,
      offsetX: itemWidth * 0.05,
      offsetY: itemHeight * 0.05,
      group,
      parts: [],
    };
  });

  return {
    ...item,
    properties,
  };
}
