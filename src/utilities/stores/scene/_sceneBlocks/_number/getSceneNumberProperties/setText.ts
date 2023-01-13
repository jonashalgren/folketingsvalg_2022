import { Text } from "troika-three-text";
import { threeProperties } from "@assets";
import type { Props } from "./index";

export function setText(item: Props) {
  const chartText = new Text();
  chartText.text = "";
  chartText.textAlign = "center";
  chartText.font = threeProperties.font_ane;
  chartText.fontSize = 15;
  chartText.maxWidth = 100;
  chartText.position.x = 0;
  chartText.position.z = 0;
  chartText.position.y = 0;
  chartText.anchorX = "center";
  chartText.anchorY = "middle";
  chartText.color = threeProperties.color_misc;
  chartText.sync();

  return {
    ...item,
    numberProperties: {
      text: chartText,
    },
  };
}
