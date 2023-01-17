import type { S_Line, S_Line_Anim, Mesh_Line } from "@models";
import { threeProperties } from "@assets";
import { getChartValue } from "@helpers";
import { Group } from "three";
import { Text } from "troika-three-text";

type Props = {
  anims: S_Line_Anim[];
  data: S_Line;
};

export function getLabel({ anims, data }: Props) {
  const xValues = anims.flatMap((item) => item.points.flatMap((item) => item[0]));
  const yValues = anims.flatMap((item) => item.points.flatMap((item) => item[1]));
  const values = data.animConfigs.flatMap((item) => item.values.flatMap((item) => item));

  const xMax = Math.max(...xValues);
  const xMin = Math.min(...xValues);
  const yMax = Math.max(...yValues);
  const yMin = Math.min(...yValues);
  const yMiddle = (yMax + yMin) / 2;

  const yMinForXAxis =
    data?.yAxisBottom !== undefined ? Math.min(...yValues, data.yAxisBottom) : Math.min(...yValues);

  const yPositions = [yMax, yMiddle, yMin];

  const yValMax = Math.max(...values);
  const yValMin = Math.min(...values);
  const yValMiddle = (yValMax + yValMin) / 2;

  const yLabels: Mesh_Line[] = [yValMax, yValMiddle, yValMin].map((item, index) => {
    const yPos = yPositions[index];
    const yLabel = new Text();
    yLabel.text = getChartValue({ value: item, decimals: data?.decimals ?? 1, unit: data?.unit ?? "" });
    yLabel.font = threeProperties.font_ane;
    yLabel.fontSize = 4;
    yLabel.color = threeProperties.color_dark;
    yLabel.anchorX = "right";
    yLabel.anchorY = "middle";
    yLabel.position.set(xMin - 2, yPos - 1, 0);
    yLabel.sync();
    return yLabel;
  });

  const xLength = data.xLabels.length;
  const xWidth = xMax - xMin;
  const group = new Group();

  const xLabels: Mesh_Line[] = data.xLabels.map((item, index) => {
    const xLabel = new Text();
    if (item.length > 0) {
      xLabel.text = item;
      xLabel.font = threeProperties.font_ane;
      xLabel.fontSize = 4;
      xLabel.color = threeProperties.color_dark;
      xLabel.anchorX = "center";
      xLabel.anchorY = "top";
      xLabel.position.set(xMin + (xWidth / (xLength - 1)) * index, yMinForXAxis - 6, 0);
      xLabel.sync();
    }
    return xLabel;
  });

  group.add(...xLabels, ...yLabels);

  return group;
}
