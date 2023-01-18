import type { Props } from "./index";

export function setValues(item: Props): Props {
  const { bottomValue, steps, topValue, width } = item.properties;
  const diff = topValue - bottomValue;
  const highestValue = Math.max(...item.data.animConfigs.flatMap((item) => item.values));
  const offsetY = (diff - highestValue) / 2;

  return {
    ...item,
    anims: item.data.animConfigs.map((item, index) => {
      const offsetX = item.offsetX ?? 0;
      let points: [number, number, number][] = [];
      for (let i = 0; i < steps; i++) {
        if (i >= offsetX) {
          const value = item.values[i - offsetX] - bottomValue;
          const x = (width / (steps - 1)) * i - width / 2;
          const y = (value / diff) * 100 - 50 + offsetY;
          points.push([x, y, -((index + 0.5) / 1.5)]);
        }
      }

      return {
        points,
      };
    }),
  };
}
