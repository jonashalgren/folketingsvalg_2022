import { Text } from "troika-three-text";
import { mesh_static_settings, fonts } from "@assets";
import type { C_S_E_Mesh_Text } from "@models";

export function getTextMeshes() {
  const text = new Text();
  text.text = "";
  text.textAlign = "center";
  text.font = fonts.ane;
  text.fontSize = 15;
  text.maxWidth = 100;
  text.position.x = 0;
  text.position.z = 0;
  text.position.y = 0;
  text.anchorX = "center";
  text.anchorY = "middle";
  text.color = mesh_static_settings.color_misc;
  text.sync();
  text.userData.stayHidden = false;

  return [text] as C_S_E_Mesh_Text[];
}