import { Color, MeshLambertMaterial } from "three";
import { defaults } from "@assets";

type Props = {
  color?: Color;
};

export function getMeshMaterial({ color }: Props) {
  return new MeshLambertMaterial({ color: color ? color : defaults.color_neutral });
}
