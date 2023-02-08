import type { C_S_Settings, C_S_E_Details } from "@models";
import { Canvas_Scene_Element_Box, Canvas_Scene_Element_Map, Canvas_Scene_Element_Transition } from "@classes";

type Props = {
  sceneSettings: C_S_Settings;
  canvasSceneElementsDetails: C_S_E_Details;
};

export function getElements({ sceneSettings, canvasSceneElementsDetails }: Props) {
  return sceneSettings.elements
    .map((item, index) => {
      const lol = canvasSceneElementsDetails[item.type];
      if (lol) {
        return new lol.class(item, lol.meshes, sceneSettings, index);
      }
      return;
    })
    .filter((item) => item);
}
