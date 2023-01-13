import type { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type Props = {
  camera: PerspectiveCamera;
  element: HTMLCanvasElement;
};
export function setNGetSceneControls({ camera, element }: Props) {
  const controls = new OrbitControls(camera, element);
  controls.enableZoom = false;
  controls.enablePan = false;
  return controls;
}
