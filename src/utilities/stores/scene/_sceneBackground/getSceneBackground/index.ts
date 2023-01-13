import { Scene, WebGLRenderer } from "three";
import * as THREE from "three";
import type { CanvasProperties } from "@models";
import { threeProperties } from "@assets";
import { setSceneLight, setNGetSceneCamera, setNGetSceneControls } from "@helpers";

type Props = {
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
};

export function getSceneBackground({ canvasElement, canvasProperties }: Props) {
  const { height, width } = canvasProperties;
  //CREATE SCENE
  const scene = new Scene();
  //LIGHT
  const geometry = new THREE.PlaneGeometry(10000, 10000);
  const material = new THREE.MeshBasicMaterial({ color: threeProperties.color_background });
  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0, 0, 1);

  scene.add(plane);

  setSceneLight({ scene });
  //CAMERA
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  camera.position.set(0, 0, 200);

  //CONTROLS
  const controls = setNGetSceneControls({ camera, element: canvasElement });

  return {
    render: function ({ renderer }: { renderer: WebGLRenderer }) {
      //UPDATE CONTROLS
      controls.update();
      //RENDER UPDATE
      renderer.render(scene, camera);
    },
  };
}
