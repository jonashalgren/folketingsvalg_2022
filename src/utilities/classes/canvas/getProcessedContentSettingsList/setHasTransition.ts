import type { Props } from "./index";
import { C_C_Element_Type } from "@models";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    contentSettingsList: item.contentSettingsList.map((contentSettings) => {
      return {
        ...contentSettings,
        hasTransition: Boolean(contentSettings.elements.find((item) => item.type === C_C_Element_Type.transition)),
      };
    }),
  };
}
