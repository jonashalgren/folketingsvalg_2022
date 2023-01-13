import type { Props } from "./index";

export function setAnimsGroupedByMapAreas(item: Props) {
  const mapAreaids = item.animsGroupedByMapVariants.flatMap((item) => item.flatMap((item) => item.areaId));
  const uniqueMapAreaIds = [...new Set(mapAreaids)];

  return {
    ...item,
    animsGroupedByMapAreas: uniqueMapAreaIds.map((id) => {
      return item.animsGroupedByMapVariants.flatMap((item) => item).filter((item) => item.areaId === id);
    }),
  };
}
