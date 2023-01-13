import type { Props } from "./index";

export function cleanupData(item: Props) {
  return {
    ...item,
    data: item.data.filter((item) => item?.scenenr?.length > 0 || item?.tekst?.length > 0),
  };
}
