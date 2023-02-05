import type { Props } from "./index";

export function cleanupData(item: Props): Props {
  return {
    ...item,
    responseData: item.responseData.filter((item) => item?.scenenr?.length > 0 || item?.tekst?.length > 0),
  };
}
