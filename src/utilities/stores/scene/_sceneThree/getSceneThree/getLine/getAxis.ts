import type { S_Line_Anim, S_Line } from "@models";
import { BoxGeometry, MeshLambertMaterial, Mesh, Group, Color } from "three";

type Props = {
  anims: S_Line_Anim[];
  data: S_Line;
};

export function getAxis({ anims, data }: Props) {
  const xValues = anims.flatMap((item) => item.points.flatMap((item) => item[0]));
  const yValues = anims.flatMap((item) => item.points.flatMap((item) => item[1]));
  const group = new Group();

  const xMax = Math.max(...xValues);
  const xMin = Math.min(...xValues);
  const yMax = data?.yAxisTop !== undefined ? Math.max(...yValues, data.yAxisTop) : Math.max(...yValues);
  const yMin =
    data?.yAxisBottom !== undefined ? Math.min(...yValues, data.yAxisBottom) : Math.min(...yValues);

  const xAxisLength = xMax - xMin;
  const xAxisPosition = 0;
  const yAxisLength = yMax - yMin;

  let axisXList = [];
  const offsetY = yAxisLength / 4;

  const axisXGeometry = new BoxGeometry(xAxisLength, 0.5, 0.1);
  const axisXMaterial = new MeshLambertMaterial({ color: new Color("#cccccc") });

  for (let i = 0; i < 5; i++) {
    const axisX = new Mesh(axisXGeometry, axisXMaterial);

    axisX.position.set(xAxisPosition - 0.25, yMin + offsetY * i, 0);

    axisXList.push(axisX);
  }

  group.add(...axisXList);

  return group;
}
