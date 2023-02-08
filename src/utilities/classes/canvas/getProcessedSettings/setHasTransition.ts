import type { Props } from "./index";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    scenesSettings: item.scenesSettings.map((sceneSettings) => {
      return {
        ...sceneSettings,
        hasTransition: Boolean(sceneSettings.elements.find((item) => item.type === "transition")),
      };
    }),
  };
}
