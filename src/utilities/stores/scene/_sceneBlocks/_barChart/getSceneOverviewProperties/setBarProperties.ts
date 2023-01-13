import type { Props } from "./index";

export function setBarProperties(item: Props) {
  const rowHeight = 5.8;
  const barHeight = 4;
  const fullHeight = item.partyLogoMesh.length * rowHeight;
  const barWidth = 30;

  return {
    ...item,
    overviewProperties: {
      rowHeight,
      barHeight,
      fullHeight,
      barWidth,
      bars: [],
    },
  };
}
