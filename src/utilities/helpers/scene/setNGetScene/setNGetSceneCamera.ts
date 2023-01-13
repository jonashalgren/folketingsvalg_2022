import { PerspectiveCamera } from "three";

type Props = {
  mapWidth: number;
  vh: number;
};
export function setNGetSceneCamera({ mapWidth, vh }: Props) {
  const camera = new PerspectiveCamera(50, mapWidth / vh, 0.1, 1000);
  camera.up.set(0, 0, 1);
  return camera;
}
