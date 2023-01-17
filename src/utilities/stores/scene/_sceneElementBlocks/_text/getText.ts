import { Text } from "troika-three-text";
import { threeProperties } from "@assets";
import { Group } from "three";

export function getText() {
  const text = new Text();
  text.text = "";
  text.textAlign = "center";
  text.font = threeProperties.font_ane;
  text.fontSize = 15;
  text.maxWidth = 100;
  text.position.x = 0;
  text.position.z = 0;
  text.position.y = 0;
  text.anchorX = "center";
  text.anchorY = "middle";
  text.color = threeProperties.color_misc;
  text.sync();

  const group = new Group();
  group.add(text);
  return group;
}
