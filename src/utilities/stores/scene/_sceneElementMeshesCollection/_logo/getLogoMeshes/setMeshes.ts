import { getMeshGeometry, getMeshMaterial, getMesh } from "@helpers";
import type { Props } from "./index";

export function setMeshes(item: Props) {
  return {
    ...item,
    meshes: item.shapes.flatMap((item) => {
      const letterGeometry = getMeshGeometry({ shape: item.shapeLetter, curveSegments: 10, bevelOffset: 0 });
      const letterMaterial = getMeshMaterial({});
      const meshPartyletter = getMesh({ geometry: letterGeometry, material: letterMaterial, scaleZ: 0.1 });
      meshPartyletter.position.set(0, 0, 0.4);
      meshPartyletter.userData.type = "partyLetter";

      const bgGeometry = getMeshGeometry({ shape: item.shapeBg, curveSegments: 2, bevelOffset: 0 });
      const bgMaterial = getMeshMaterial({ color: item.color });
      const meshBackground = getMesh({ geometry: bgGeometry, material: bgMaterial, scaleZ: 0.1 });
      meshBackground.userData.type = "background";

      return [meshPartyletter, meshBackground];
    }),
  };
}
