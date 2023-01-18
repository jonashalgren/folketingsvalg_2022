import type { Props } from "./index";

export function setProperties(item: Props): Props {
  const { animConfigs } = item.data;

  return {
    ...item,
    properties: {
      bottomValue: item.data.bottomValue ?? Math.min(...animConfigs.flatMap((item) => item.values)),
      topValue: item.data.topValue ?? Math.max(...animConfigs.flatMap((item) => item.values)),
      steps: Math.max(...animConfigs.flatMap((item) => item.values.length + (item.offsetX ?? 0))),
      width: item.data.width ?? 100,
    },
  };
}
