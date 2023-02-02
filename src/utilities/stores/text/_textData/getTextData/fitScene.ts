import type { Props } from "./index";

export function fitScene(item: Props) {
  return {
    ...item,
    textData: item.scenesSettings.map((_, index) => {
      return item.textData[index] ? item.textData[index] : [""];
    }),
  };
}
