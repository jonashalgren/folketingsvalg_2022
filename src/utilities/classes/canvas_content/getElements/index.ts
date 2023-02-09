import type { C_S_Settings, C_S_E_Details } from "@models";

type Props = {
  sceneSettings: C_S_Settings;
  canvasSceneElementsDetails: C_S_E_Details;
};

export function getElements({ sceneSettings, canvasSceneElementsDetails }: Props) {
  return sceneSettings.elements
    .map((item, index) => {
      const details = canvasSceneElementsDetails[item.type];
      if (details) {
        return new details.class(item, details.meshes, sceneSettings, index);
      }
      return;
    })
    .filter((item) => item);
}
