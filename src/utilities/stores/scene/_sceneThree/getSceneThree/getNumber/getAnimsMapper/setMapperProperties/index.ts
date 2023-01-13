import { interpolate } from "popmotion";
import type { Props } from "../index";

export function setMapperProperties(item: Props) {
  return {
    ...item,
    mapperProperties: {
      ...item.numberProperties,
      valueMapper: interpolate(item.data.anims.value.inputRange, item.data.anims.value.outputRange),
      colorMapper: interpolate(item.data.anims.color.inputRange, item.data.anims.color.outputRange),
    },
  };
}
