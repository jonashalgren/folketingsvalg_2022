import type { Scene } from "three";
import { SpotLight, AmbientLight } from "three";

type Props = {
  scene: Scene;
};
export function setSceneLight({ scene }: Props) {
  const spotLight = new SpotLight(0xffffff, 0.4);
  spotLight.position.set(0, 0, 200);
  scene.add(spotLight);
  const ambientLight = new AmbientLight(0xffffff, 0.6);
  ambientLight.position.set(0, 0, 200);
  scene.add(ambientLight);
}
