import { Color, MeshLambertMaterial } from "three";
import { threeProperties } from "@assets";

type Props = {
  color?: Color;
};

export function getMeshMaterial({ color }: Props) {
  return new MeshLambertMaterial({ color: color ? color : threeProperties.color_neutral });
}
