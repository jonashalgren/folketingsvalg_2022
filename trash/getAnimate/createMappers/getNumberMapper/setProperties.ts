import { _isAnimating } from "@stores";
import { Text } from "troika-three-text";
import type { Props } from "./index";
import { degreesToRadians, interpolate } from "popmotion";

export function setProperties(item: Props): Props {
  const numbers = item?.data?.number ?? [];

  return {
    ...item,
    properties: numbers.map((entry) => {
      const sceneNumber = new Text();
      const { textAlign, font, rotation } = entry;
      sceneNumber.text = 0;
      sceneNumber.textAlign = textAlign;
      sceneNumber.font = font;

      sceneNumber.anchorY = "middle";
      sceneNumber.anchorX = "center";

      sceneNumber.rotation.set(
        degreesToRadians(rotation[0]),
        degreesToRadians(rotation[1]),
        degreesToRadians(rotation[2])
      );
      sceneNumber.sync();

      item.group.add(sceneNumber);
      return {
        number: sceneNumber,
        decimals: entry.decimals ?? 0,
        unit: entry?.unit ?? "",
        colorMapper: interpolate(entry.animRange.inputRange, entry.animRange.colorRange),
        valueMapper: interpolate(entry.animRange.inputRange, entry.animRange.valueRange),
        positionMapper: interpolate(entry.positionRange.inputRange, entry.positionRange.outputRange),
        fontSizeMapper: interpolate(entry.animRange.inputRange, entry.animRange.sizeRange),
      };
    }),
  };
}
