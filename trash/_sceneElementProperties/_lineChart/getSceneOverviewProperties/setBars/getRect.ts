import type { S_Overview_Properties, P_Logo_Mesh } from "@models";
import { getMeshMaterial } from "@helpers";
import { BoxBufferGeometry, Mesh } from "three";

type Props = {
  party: P_Logo_Mesh;
  overviewProperties?: S_Overview_Properties;
  y: number;
};

export function getRect(item: Props) {
  const { barHeight, barWidth } = item.overviewProperties;

  const material = getMeshMaterial({ color: item.party.color });
  const geometry = new BoxBufferGeometry(barWidth, barHeight, 0.01);
  const rect = new Mesh(geometry, material);

  rect.position.set(7, item.y + barHeight - barHeight / 2, 0);

  return rect;
}
