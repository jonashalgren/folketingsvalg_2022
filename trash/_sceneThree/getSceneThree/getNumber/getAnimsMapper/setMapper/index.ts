import { getChartValue } from "@helpers";
import { getFontSize } from "./getFontSize";
import type { Props } from "../index";
import type { S_Anims_Mappers } from "@models";

export function setMapper(item: Props) {
  let localProgress = undefined;
  const { colorMapper, text, valueMapper } = item.mapperProperties;

  text.fontSize = getFontSize({ decimals: item.data.decimals });
  text.anchorX = "center";
  text.anchorY = "middle";

  text.sync();

  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      if (localProgress !== progress) {
        localProgress = progress;
        text.color = colorMapper(progress);
        text.text = getChartValue({
          value: valueMapper(progress),
          decimals: item.data.decimals,
          unit: item.data.unit,
        });
      }
    },
  };
}
