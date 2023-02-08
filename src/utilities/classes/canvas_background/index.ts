import { Mesh, MeshBasicMaterial, PlaneGeometry, Scene, SpotLight, AmbientLight, PerspectiveCamera, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class Canvas_Background {
  private scene: Scene;
  private geometry: PlaneGeometry;
  private material: MeshBasicMaterial;
  private plane: Mesh;
  private spotLight: SpotLight;
  private ambientLight: AmbientLight;
  private controls: OrbitControls;

  constructor(private canvasDOMElement: HTMLCanvasElement, private camera: PerspectiveCamera) {
    this.scene = new Scene();
    this.camera = camera.clone();
    this.setPlane();
    this.setCamera();
    this.setControls();
    this.setLights();
  }

  private setPlane() {
    this.geometry = new PlaneGeometry(10000, 10000);
    this.material = new MeshBasicMaterial({ color: "#e6e6e1" });
    this.plane = new Mesh(this.geometry, this.material);
    this.plane.position.set(0, 0, 1);
    this.scene.add(this.plane);
  }

  private setCamera() {
    this.camera.up.set(0, 0, 1);
    this.camera.position.set(0, 0, 200);
  }

  private updateCamera(camera: PerspectiveCamera) {
    this.camera.aspect = camera.aspect;
    this.camera.updateProjectionMatrix();
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  private setLights() {
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.spotLight.position.set(0, 0, 200);
    this.scene.add(this.spotLight);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.ambientLight.position.set(0, 0, 200);
    this.scene.add(this.ambientLight);
  }

  resize(camera: PerspectiveCamera) {
    this.updateCamera(camera);
  }

  update({ renderer }: { renderer: WebGLRenderer }) {
    this.controls.update();
    renderer.render(this.scene, this.camera);
  }
}
