import { Scene, SpotLight, AmbientLight, PerspectiveCamera, WebGLRenderer, GridHelper, Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { C_Content_Settings } from "@models";

export abstract class Canvas_Item {
  renderer: WebGLRenderer;
  canvasDOMElement: HTMLCanvasElement;
  camera: PerspectiveCamera;

  scene: Scene;
  controls: OrbitControls;

  private spotLight: SpotLight;
  private ambientLight: AmbientLight;

  abstract resize(camera: PerspectiveCamera, sceneSettings: C_Content_Settings): void;
  abstract update(): void;

  constructor(renderer: WebGLRenderer, canvasDOMElement: HTMLCanvasElement, camera: PerspectiveCamera) {
    this.renderer = renderer;
    this.canvasDOMElement = canvasDOMElement;
    this.scene = new Scene();
    this.setCamera(camera);
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

  private setCamera(camera: PerspectiveCamera) {
    this.camera = camera.clone();
    this.camera.up.set(0, 0, 1);
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  public setGrid() {
    const gridXZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridXY = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridYZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    gridXY.rotation.x = Math.PI / 2;
    gridYZ.rotation.z = Math.PI / 2;
    this.scene.add(gridYZ, gridXZ, gridXY);
  }

  public addElementMeshesToScene(meshes: Mesh[]) {
    this.scene.add(...meshes);
  }

  public updateCamera(camera: PerspectiveCamera) {
    this.camera.aspect = camera.aspect;
    this.camera.updateProjectionMatrix();
  }

  public updateControls() {
    this.controls.update();
  }

  public updateRenderer() {
    this.renderer.render(this.scene, this.camera);
  }
}
