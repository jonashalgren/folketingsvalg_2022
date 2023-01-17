import type { Props } from "./index";

export function setParts(item: Props) {
  return {
    ...item,
    properties: item.properties.map((entry) => {
      const { itemHeight, itemWidth, itemsPrRow, items, rows, scale, amount, group } = entry;
      const width = itemWidth * itemsPrRow;
      const xStartPosition = -(width / 2);
      const yStartPosition = (rows * itemHeight) / 2 - itemHeight;

      return {
        ...entry,
        parts: Array.from(Array(amount).keys()).map((_, i) => {
          let inputRanges: [number, number][] = [];
          const row = Math.floor(i / itemsPrRow);
          const xl = xStartPosition + i * itemWidth - width * row;
          const y = yStartPosition - row * itemHeight;
          const grp = group.clone();
          grp.children.forEach((item: any) => {
            const material = item.material.clone();
            item.material = material;
          });
          grp.position.set(xl + entry.offsetX, y + entry.offsetY, 0.1);
          grp.scale.set(scale, scale, 0.1);

          items.forEach((item) => {
            if (i >= amount - item.disabled) {
              const inputRange = item.inputRange as [number, number];
              inputRanges.push(inputRange);
            }
          });
          return {
            group: grp,
            inputRanges,
          };
        }),
      };
    }),
  };
}
