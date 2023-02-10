import { Scene, SpotLight, AmbientLight, PerspectiveCamera, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { C_Content_Settings } from "@models";

export abstract class Canvas_Scene {
  public scene: Scene;
  public controls: OrbitControls;
  public camera: PerspectiveCamera;

  private spotLight: SpotLight;
  private ambientLight: AmbientLight;

  abstract resize(cameraAspect: number, contentSettings: C_Content_Settings): void;
  abstract update(): void;

  constructor(public renderer: WebGLRenderer, public canvasDOMElement: HTMLCanvasElement, public cameraAspect: number) {
    this.scene = new Scene();
    this.setCamera();
    this.setControls();
    this.setLights();
  }

  private setLights() {
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.spotLight.position.set(0, 0, 200);
    this.ambientLight.position.set(0, 0, 200);
    this.scene.add(this.spotLight, this.ambientLight);
  }

  private setCamera() {
    this.camera = new PerspectiveCamera(50, this.cameraAspect, 0.1, 1000);
    this.camera = this.camera.clone();
    this.camera.up.set(0, 0, 1);
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  public updateCamera(cameraAspect: number) {
    this.camera.aspect = cameraAspect;
    this.camera.updateProjectionMatrix();
  }

  public updateControls() {
    this.controls.update();
  }

  public updateRenderer() {
    this.renderer.render(this.scene, this.camera);
  }
}
