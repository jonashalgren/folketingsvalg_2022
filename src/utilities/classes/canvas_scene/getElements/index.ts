import type { C_Content_Settings, C_C_Element_Details } from "@models";

type Props = {
  sceneSettings: C_Content_Settings;
  elementsDetails: C_C_Element_Details[];
};

export function getElements({ sceneSettings }: Props) {
  return sceneSettings.elements
    .map((element, index) => {
      const elementsDetails = sceneSettings[element.type];
      if (elementsDetails) {
        return new elementsDetails.class(element, elementsDetails.meshes, sceneSettings, index);
      }
      return;
    })
    .filter((item) => item);
}
