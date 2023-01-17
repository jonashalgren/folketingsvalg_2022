import { getMeshGeometry, getMeshMaterial, getMesh } from "@helpers";
import { Group } from "three";
import type { Props } from "./index";

export function setMeshes(item: Props) {
  return {
    ...item,
    logos: item.shapes.map((item) => {
      const group = new Group();
      const letterGeometry = getMeshGeometry({ shape: item.shapeLetter, curveSegments: 10, bevelOffset: 0 });
      const letterMaterial = getMeshMaterial({});
      const meshLetter = getMesh({ geometry: letterGeometry, material: letterMaterial, scaleZ: 0.1 });
      meshLetter.position.set(0, 0, 0.4);

      const bgGeometry = getMeshGeometry({ shape: item.shapeBg, curveSegments: 2, bevelOffset: 0 });
      const bgMaterial = getMeshMaterial({ color: item.color });
      const meshBg = getMesh({ geometry: bgGeometry, material: bgMaterial, scaleZ: 0.1 });

      group.add(meshLetter, meshBg);

      return {
        partyLetter: item.letter,
        group,
      };
    }),
  };
}
