import type { S_Anims_Mappers } from "@models";
import { _isAnimating } from "@stores";
import type { Props } from "./index";
import { getChartValue } from "@helpers";

export function setMapper(item: Props): Props {
  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      item.properties.forEach((entry) => {
        entry.number.color = entry.colorMapper(progress);
        entry.number.text = getChartValue({
          value: entry.valueMapper(progress),
          decimals: entry.decimals,
          unit: entry.unit,
        });
        entry.number.fontSize = entry.fontSizeMapper(progress);
        entry.number.position.set(...entry.positionMapper(progress));
      });
    },
  };
}
