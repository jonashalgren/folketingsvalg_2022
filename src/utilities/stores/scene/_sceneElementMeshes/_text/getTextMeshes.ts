import { Text } from "troika-three-text";
import { defaults, fonts } from "@assets";
import type { S_E_Text_Mesh } from "@models";

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
  text.color = defaults.color_misc;
  text.sync();

  return [text] as S_E_Text_Mesh[];
}
