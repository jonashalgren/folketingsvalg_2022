import type { Mesh_Box } from "@models";

type Props = {
  rect: Mesh_Box;
  value: number;
  barWidth: number;
  currentSize: number;
};

export function animateBarMesh({ rect, currentSize, barWidth }: Props) {
  rect.scale.x = currentSize / barWidth;
  rect.position.x = currentSize / 2 - 13;
}
