import type { S_BarChart_Properties, P_Logo_Mesh } from "@models";
import { Text } from "troika-three-text";
import { threeProperties, partyCollection } from "@assets";

type Props = {
  party: P_Logo_Mesh;
  overviewProperties?: S_BarChart_Properties;
  y: number;
};

export function getPartyText(item: Props) {
  const partyText = partyCollection[item.party.letter].shortName;
  const chartText = new Text();

  chartText.text = partyText;
  chartText.font = threeProperties.font_publik;
  chartText.fontSize = 1.3;
  chartText.position.x = -17.5;
  chartText.position.z = 0;
  chartText.position.y = item.y + 0.2;
  chartText.color = threeProperties.color_dark;
  chartText.anchorX = "left";
  chartText.anchorY = "top";
  chartText.sync();

  return chartText;
}
