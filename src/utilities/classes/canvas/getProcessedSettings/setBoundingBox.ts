import type { Props } from "./index";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    scenesSettings: item.scenesSettings.map((sceneSettings) => {
      return {
        ...sceneSettings,
        boundingBox: (function () {
          const elementTypes = sceneSettings.elements.map((item) => item.type);
          if (elementTypes.includes("map")) {
            return { x: 85, y: 100 };
          }
          return { x: 100, y: 100 };
        })(),
      };
    }),
  };
}
