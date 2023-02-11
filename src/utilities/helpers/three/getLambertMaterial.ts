import { Color, MeshLambertMaterial, Texture } from "three";
import { mesh_static_settings } from "@assets";

type Props = {
  color?: Color;
  map?: Texture;
};

export function getLambertMaterial({ color, map = null }: Props) {
  return new MeshLambertMaterial({ color: color ? color : mesh_static_settings.color_neutral, transparent: true, map });
}
