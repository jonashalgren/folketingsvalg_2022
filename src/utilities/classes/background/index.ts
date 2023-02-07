import type { Viewport } from "@models";
import {
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  SpotLight,
  AmbientLight,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class Background {
  scene: Scene;
  geometry: PlaneGeometry;
  material: MeshBasicMaterial;
  plane: Mesh;
  spotLight: SpotLight;
  ambientLight: AmbientLight;
  controls: OrbitControls;

  constructor(public canvasDOMElement: HTMLCanvasElement, public camera: PerspectiveCamera, public viewport: Viewport) {
    this.scene = new Scene();
    this.camera = camera.clone();
    this.setPlane();
    this.setCamera();
    this.setControls();
    this.setLights();
  }

  setPlane() {
    this.geometry = new PlaneGeometry(10000, 10000);
    this.material = new MeshBasicMaterial({ color: "#e6e6e1" });
    this.plane = new Mesh(this.geometry, this.material);
    this.plane.position.set(0, 0, 1);
    this.scene.add(this.plane);
  }

  setCamera() {
    this.camera.up.set(0, 0, 1);
    this.camera.position.set(0, 0, 200);
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  setLights() {
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.spotLight.position.set(0, 0, 200);
    this.scene.add(this.spotLight);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.ambientLight.position.set(0, 0, 200);
    this.scene.add(this.ambientLight);
  }

  render({ renderer }: { renderer: WebGLRenderer }) {
    this.controls.update();
    renderer.render(this.scene, this.camera);
  }
}
