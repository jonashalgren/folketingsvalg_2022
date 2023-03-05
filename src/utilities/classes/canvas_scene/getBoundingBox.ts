import { C_S_Element_Type, type C_Scene_Settings } from "@models";
import { Vector3 } from "three";

type Props = {
  sceneSettings: C_Scene_Settings;
};

export function getBoundingBox({ sceneSettings }: Props) {
  const elementTypes = sceneSettings.elements.map((item) => item.type);
  if (elementTypes.includes(C_S_Element_Type.MAP)) {
    return new Vector3(85, 100, 0);
  }
  return new Vector3(100, 100, 0);
}
