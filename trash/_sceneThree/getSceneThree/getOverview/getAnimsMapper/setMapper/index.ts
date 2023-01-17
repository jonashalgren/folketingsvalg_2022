import { animateBarMesh } from "./animateBarMesh";
import { animateTextMesh } from "./animateTextMesh";
import { animateMiniTextMesh } from "./animateMiniTextMesh";
import type { Props } from "../index";
import type { S_Anims_Mappers } from "@models";

export function setMapper(item: Props) {
  let localProgress = undefined;
  const maxValue = Math.max(...item.anims.flatMap((item) => item.value.outputRange));
  const { barWidth } = item.overviewProperties;
  const differ = barWidth / maxValue;
  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      if (progress !== localProgress) {
        localProgress = progress;
        item.mapperProperties.forEach(({ rect, text, miniText, valueMapper, progressionMapper }) => {
          const value = valueMapper(progress);
          const progression = progressionMapper(progress);
          const currentSize = value * differ;

          animateTextMesh({
            text,
            value,
            currentSize,
          });

          animateMiniTextMesh({ text: miniText, value, progression, currentSize });

          animateBarMesh({ rect, value, barWidth, currentSize });
        });
      }
    },
  };
}
