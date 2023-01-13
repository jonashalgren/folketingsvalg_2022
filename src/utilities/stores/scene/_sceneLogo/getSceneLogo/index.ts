import { Scene, WebGLRenderer } from "three";
import type { CanvasProperties } from "@models";
import { setNGetSceneCamera, setNGetSceneControls, setSceneLight } from "@helpers";

type Props = {
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
};

export function getSceneLogo({ canvasElement, canvasProperties }: Props) {
  const { height, width } = canvasProperties;
  //CREATE SCENE
  const scene = new Scene();
  //LIGHT
  setSceneLight({ scene });
  //CAMERA
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  camera.position.set(0, 0, 5);

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
