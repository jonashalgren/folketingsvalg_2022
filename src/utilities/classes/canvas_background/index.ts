import { Mesh, MeshBasicMaterial, PlaneGeometry, PerspectiveCamera, WebGLRenderer } from "three";
import { Canvas_Scene } from "@classes_abstract";

export class Canvas_Background extends Canvas_Scene {
  private plane: Mesh;

  constructor(public renderer: WebGLRenderer, public canvasDOMElement: HTMLCanvasElement, public camera: PerspectiveCamera) {
    super(renderer, canvasDOMElement, camera);
    this.setPlane();
    this.camera.position.set(0, 0, 200);
  }

  private setPlane() {
    const geometry = new PlaneGeometry(10000, 10000);
    const material = new MeshBasicMaterial({ color: "#e6e6e1" });
    this.plane = new Mesh(geometry, material);
    this.plane.position.set(0, 0, 1);
    this.scene.add(this.plane);
  }

  resize(camera: PerspectiveCamera) {
    this.updateCamera(camera);
  }

  update() {
    this.updateControls();
    this.updateRenderer();
  }
}
