import { SVGLoader, type SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import { Color } from "three";
import { threeProperties } from "@assets";
import { getMeshGeometry, getMeshMaterial, getMesh } from "@helpers";

type Props = {
  data: SVGResult;
};

export function getFigureMeshes({ data }: Props) {
  return data.paths.flatMap((path) => {
    return SVGLoader.createShapes(path).map((shape) => {
      const geometry = getMeshGeometry({ shape: shape, bevelOffset: 0, curveSegments: 10 });
      const material = getMeshMaterial({ color: new Color(threeProperties.color_dark) });
      const mesh = getMesh({ geometry, material });
      material.transparent = true;
      mesh.scale.set(5, 5, 0.1);
      mesh.userData.isFaded = false;
      return mesh;
    });
  });
}