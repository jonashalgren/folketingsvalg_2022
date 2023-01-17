import type { S_BarChart_Properties, P_Logo_Mesh } from "@models";
import { Text } from "troika-three-text";
import { threeProperties } from "@assets";

type Props = {
  party: P_Logo_Mesh;
  overviewProperties?: S_BarChart_Properties;
  y: number;
};

export function getMiniText(item: Props) {
  const { barHeight } = item.overviewProperties;
  const chartText = new Text();

  chartText.text = "";
  chartText.font = threeProperties.font_publik_regular;
  chartText.fontSize = 2.5;
  chartText.position.x = 30;
  chartText.position.z = 0;
  chartText.position.y = item.y + barHeight / 1.8;
  chartText.color = "#737373";
  chartText.material.transparent = true;
  chartText.userData.isVisible = false;
  chartText.userData.stayHidden = true;
  chartText.material.opacity = 0;
  chartText.anchorX = "left";
  chartText.anchorY = "middle";
  chartText.sync();

  return chartText;
}
