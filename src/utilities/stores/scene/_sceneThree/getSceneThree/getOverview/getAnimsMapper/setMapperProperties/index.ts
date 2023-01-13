import { getValueMapper } from "./getValueMapper";
import type { Props } from "../index";
import { interpolate } from "popmotion";

export function setMapperProperties(item: Props) {
  return {
    ...item,
    mapperProperties: item.anims.flatMap(({ partyLetter, value, progression }) => {
      return item.overviewProperties.bars
        .filter((item) => item.partyLetter === partyLetter)
        .map((item) => {
          return {
            ...item,
            valueMapper: getValueMapper(value),
            progressionMapper: interpolate<number>(progression.inputRange, progression.outputRange),
          };
        });
    }),
  };
}
