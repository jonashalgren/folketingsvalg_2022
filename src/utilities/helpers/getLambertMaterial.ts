import { Color, MeshLambertMaterial, Texture } from "three";
import { element_mesh_settings } from "@assets";

type Props = {
  color?: Color;
  map?: Texture;
};

export function getLambertMaterial({ color, map = null }: Props) {
  return new MeshLambertMaterial({ color: color ? color : element_mesh_settings.color_neutral, transparent: true, map });
}
