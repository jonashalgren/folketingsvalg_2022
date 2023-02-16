import { SVGLoader, type SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import { Color } from "three";
import { element_mesh_settings } from "@assets";
import type { C_S_E_Mesh_Figure } from "@models";
import { getExtrudeGeometry, getLambertMaterial, getMesh } from "@helpers";

type Props = {
  data: SVGResult;
};

export function getFigureMeshes({ data }: Props) {
  return data.paths.flatMap((path) => {
    return SVGLoader.createShapes(path).map((shape) => {
      const geometry = getExtrudeGeometry({ shape: shape, bevelOffset: 0, curveSegments: 10 });
      const material = getLambertMaterial({ color: new Color(element_mesh_settings.color_dark) });
      const mesh = getMesh({ geometry, material });
      material.transparent = true;
      mesh.scale.set(5, 5, 0.1);

      mesh.userData.isFaded = false;

      return mesh as C_S_E_Mesh_Figure;
    });
  });
}
