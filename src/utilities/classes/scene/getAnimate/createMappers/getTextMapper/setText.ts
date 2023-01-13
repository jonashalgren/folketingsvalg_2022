import type { S_Anims_Mappers, Mesh_Text } from "@models";
import { _isAnimating } from "@stores";
import { Text } from "troika-three-text";
import type { Props } from "./index";
import { degreesToRadians } from "popmotion";

export function setText(item: Props): Props {
  const textList = item.data?.text ?? [];
  const meshes: Mesh_Text[] = textList.map((entry) => {
    const { color, font, position, rotation, text, textAlign } = entry;
    const fontSize = entry.fontSize * (entry.isResponsive ? item.canvasProperties.fontMultiplier : 1);
    const maxWidth = entry.maxWidth * (entry.isResponsive ? item.canvasProperties.fontMultiplier : 1);
    const sceneText = new Text();
    sceneText.text = text;
    sceneText.textAlign = textAlign;
    sceneText.font = font;
    sceneText.fontSize = fontSize;
    sceneText.maxWidth = maxWidth;
    sceneText.position.set(...position);
    sceneText.rotation.set(
      degreesToRadians(rotation[0]),
      degreesToRadians(rotation[1]),
      degreesToRadians(rotation[2])
    );
    sceneText.anchorX = "center";
    sceneText.anchorY = "middle";
    sceneText.color = color;
    return sceneText;
  });

  if (meshes.length > 0) {
    item.group.add(...meshes);
  }

  return { ...item, mapper: function ({}: S_Anims_Mappers) {} };
}
