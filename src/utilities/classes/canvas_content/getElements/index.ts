import type { C_Content_Settings, C_C_Element_Details } from "@models";

type Props = {
  contentSettings: C_Content_Settings;
  canvasContentElementsDetails: C_C_Element_Details;
};

export function getElements({ contentSettings, canvasContentElementsDetails }: Props) {
  return contentSettings.elements
    .map((element, index) => {
      const elementsDetails = canvasContentElementsDetails[element.type];
      if (elementsDetails) {
        return new elementsDetails.class(element, elementsDetails.meshes, contentSettings, index);
      }
      return;
    })
    .filter((item) => item);
}
