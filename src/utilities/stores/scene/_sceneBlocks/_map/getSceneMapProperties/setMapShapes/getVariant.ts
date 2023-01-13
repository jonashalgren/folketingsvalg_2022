import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { S_Map_Mesh_Variant } from "@models";

type Props = {
  path: SVGResultPaths;
};

export function getVariant({ path }: Props): S_Map_Mesh_Variant {
  const variant = path.userData.node.id.split("_")[0];
  return variant.length > 0 ? (variant === "dot" ? "point" : "landmass") : "landmass";
}
