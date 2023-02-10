import { Color, MeshLambertMaterial } from "three";
import { mesh_static_settings } from "@assets";

type Props = {
  color?: Color;
};

export function getMeshMaterial({ color }: Props) {
  return new MeshLambertMaterial({ color: color ? color : mesh_static_settings.color_neutral });
}
