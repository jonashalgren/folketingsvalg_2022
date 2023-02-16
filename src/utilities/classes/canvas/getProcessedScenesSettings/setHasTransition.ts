import type { Props } from "./index";
import { C_S_Element_Type } from "@models";

export function setBoundingBox(item: Props) {
  return {
    ...item,
    scenesSettings: item.scenesSettings.map((sceneSettings) => {
      return {
        ...sceneSettings,
        hasTransition: Boolean(sceneSettings.elements.find((item) => item.type === C_S_Element_Type.transition)),
      };
    }),
  };
}
