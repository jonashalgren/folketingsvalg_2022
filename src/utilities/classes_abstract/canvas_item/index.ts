import { Scene, SpotLight, AmbientLight, PerspectiveCamera, WebGLRenderer, Mesh, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { C_Settings } from "@models";

type Props = {
  renderer: WebGLRenderer;
  canvasDOMElement: HTMLCanvasElement;
  canvasSettings: C_Settings;
  boundingBox: Vector3;
};

export abstract class Canvas_Item implements Props {
  renderer: WebGLRenderer;
  canvasDOMElement: HTMLCanvasElement;
  canvasSettings: C_Settings;

  dimensionZ: number;
  boundingBox: Vector3;
  scene: Scene;
  controls: OrbitControls;
  camera: PerspectiveCamera;

  private spotLight: SpotLight;
  private ambientLight: AmbientLight;

  abstract animate(): void;
  abstract resizing(): void;

  constructor({ renderer, canvasSettings, canvasDOMElement, boundingBox }: Props) {
    this.renderer = renderer;
    this.canvasDOMElement = canvasDOMElement;
    this.canvasSettings = canvasSettings;
    this.boundingBox = boundingBox;

    this.scene = new Scene();
    this.setCamera();
    this.setControls();
    this.setLights();
    this.setDimensionZ();
  }

  private setCamera() {
    this.camera = new PerspectiveCamera(50, this.canvasSettings.width / this.canvasSettings.height, 0.1, 1000);
    this.camera.up.set(0, 0, 1);
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  private setLights() {
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.spotLight.position.set(0, 0, 200);
    this.ambientLight.position.set(0, 0, 200);
    this.scene.add(this.spotLight, this.ambientLight);
  }

  private setDimensionZ() {
    const fov = this.camera.fov * (Math.PI / 180);
    const fovh = 2 * Math.atan(Math.tan(fov / 2) * this.camera.aspect);
    const dx = this.boundingBox.z / 2 + Math.abs(this.boundingBox.x / 2 / Math.tan(fovh / 2));
    const dy = this.boundingBox.z / 2 + Math.abs(this.boundingBox.y / 2 / Math.tan(fov / 2));
    this.dimensionZ = Math.max(dx, dy) * 1.05;
  }

  private updateCameraAspect() {
    this.camera.aspect = this.canvasSettings.width / this.canvasSettings.height;
    this.camera.updateProjectionMatrix();
  }

  private updateCanvasSettings(canvasSettings: C_Settings) {
    this.canvasSettings = canvasSettings;
  }

  addElementMeshesToScene(meshes: Mesh[]) {
    this.scene.add(...meshes);
  }

  resize({ canvasSettings }: { canvasSettings: C_Settings }) {
    this.updateCanvasSettings(canvasSettings);
    this.updateCameraAspect();
    this.setDimensionZ();
    this.resizing();
  }

  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
