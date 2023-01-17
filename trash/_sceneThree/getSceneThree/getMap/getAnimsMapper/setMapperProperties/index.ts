import { getColorMapper } from "./getColorMapper";
import { getValueMapper } from "./getValueMapper";
import { getPartyMapper } from "./getPartyMapper";
import type { Props } from "../index";

export function setMapperProperties(item: Props) {
  return {
    ...item,
    mapperProperties: item.data.anims.flatMap(({ areaId, value, color, party }) => {
      return item.mapProperties.areas
        .filter((area) => area.id === areaId)
        .map((area) => {
          return {
            ...area,
            valueMapper: getValueMapper({
              inputRange: value.inputRange,
              outputRange: value.outputRange,
              outputOffsetZ: item.outputOffsetZ,
            }),
            colorMapper: getColorMapper(color),
            partyMapper: getPartyMapper(party),
          };
        });
    }),
  };
}
