import type { Props } from "./index";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    contentSettingsList: item.contentSettingsList.map((contentSettings) => {
      return {
        ...contentSettings,
        hasTransition: Boolean(contentSettings.elements.find((item) => item.type === "transition")),
      };
    }),
  };
}
