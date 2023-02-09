import type { Props } from "./index";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    contentSettingsList: item.contentSettingsList.map((contentSettings) => {
      return {
        ...contentSettings,
        boundingBox: (function () {
          const elementTypes = contentSettings.elements.map((item) => item.type);
          if (elementTypes.includes("map")) {
            return { x: 85, y: 100 };
          }
          return { x: 100, y: 100 };
        })(),
      };
    }),
  };
}
