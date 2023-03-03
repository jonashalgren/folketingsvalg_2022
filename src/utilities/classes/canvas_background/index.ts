import { Mesh, MeshBasicMaterial, PlaneGeometry, PerspectiveCamera, WebGLRenderer } from "three";
import { Canvas_Item } from "@classes_abstract";

type Props = {
  renderer: WebGLRenderer;
  canvasDOMElement: HTMLCanvasElement;
  camera: PerspectiveCamera;
};

export class Canvas_Background extends Canvas_Item {
  private plane: Mesh;

  constructor({ renderer, canvasDOMElement, camera }: Props) {
    super({ renderer, canvasDOMElement, camera });
    this.camera.position.set(0, 0, 200);
    this.setPlane();
    this.addElementMeshesToScene([this.plane]);
  }

  private setPlane() {
    const geometry = new PlaneGeometry(10000, 10000);
    const material = new MeshBasicMaterial({ color: "#e6e6e1" });
    this.plane = new Mesh(geometry, material);
    this.plane.position.set(0, 0, 1);
  }

  resize(camera: PerspectiveCamera) {
    this.setCameraAspect(camera);
  }

  animate() {
    this.render();
  }
}
