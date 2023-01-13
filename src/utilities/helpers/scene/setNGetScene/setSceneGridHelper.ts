import type { Scene } from "three";
import { GridHelper } from "three";

type Props = {
  scene: Scene;
};
export function setSceneGridHelper({ scene }: Props) {
  const gridXZ = new GridHelper(100, 10, "#000", "#aaaaaa");
  scene.add(gridXZ);

  const gridXY = new GridHelper(100, 10, "#000", "#aaaaaa");
  gridXY.rotation.x = Math.PI / 2;
  scene.add(gridXY);

  const gridYZ = new GridHelper(100, 10, "#000", "#aaaaaa");
  gridYZ.rotation.z = Math.PI / 2;
  scene.add(gridYZ);
}
