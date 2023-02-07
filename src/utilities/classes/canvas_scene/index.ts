import type { C_S_E_Mesh, C_S_E_Mesh_Templates, C_S_Camera_Mapper, C_S_Progress, C_S_Settings, C_S_S_Element, Viewport } from "@models";
import { AmbientLight, SpotLight, WebGLRenderer, GridHelper } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import type { Canvas_Scene_Element } from "@classes";

export class Canvas_Scene {
  private scene: ThreeScene;
  private spotLight: SpotLight;
  private ambientLight: AmbientLight;
  private controls: OrbitControls;
  private elements: Canvas_Scene_Element<C_S_S_Element, C_S_E_Mesh[]>[];
  private progress: C_S_Progress;

  mapperProgress: () => C_S_Progress;
  mapperCamera: (props: C_S_Camera_Mapper) => void;

  constructor(
    private settings: C_S_Settings,
    private elementsMeshTemplates: C_S_E_Mesh_Templates,
    private camera: PerspectiveCamera,
    private canvasDOMElement: HTMLCanvasElement,
    private contentDOMElement: HTMLDivElement,
    private viewport: Viewport
  ) {
    this.scene = new ThreeScene();
    this.camera = camera.clone();

    this.setElements();
    this.setMapperCamera();
    this.setMapperProgress();
    this.setLight();
    this.setGrid();
    this.setControls();
    this.setCamera();
    this.addElementMeshesToScene();
  }

  private setMapperCamera() {
    this.mapperCamera = getMapperCamera({ settings: this.settings }).mapper;
  }

  private setMapperProgress() {
    this.mapperProgress = getMapperProgress({ contentDOMElement: this.contentDOMElement, settings: this.settings, viewport: this.viewport }).mapper;
  }

  private setElements() {
    this.elements = getElements({ settings: this.settings, elementsMeshTemplates: this.elementsMeshTemplates });
  }

  private setLight() {
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.spotLight.position.set(0, 0, 200);
    this.ambientLight.position.set(0, 0, 200);
    this.scene.add(this.spotLight, this.ambientLight);
  }

  private setGrid() {
    const gridXZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridXY = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridYZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    gridXY.rotation.x = Math.PI / 2;
    gridYZ.rotation.z = Math.PI / 2;
    this.scene.add(gridYZ, gridXZ, gridXY);
  }

  private setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  private updateControls() {
    this.controls.update();
  }

  private setCamera() {
    this.camera.up.set(0, 0, 1);
  }

  private updateCamera(camera: PerspectiveCamera) {
    this.camera.aspect = camera.aspect;
    this.camera.updateProjectionMatrix();
  }

  private addElementMeshesToScene() {
    this.elements.forEach((element) => {
      this.scene.add(element.group);
    });
  }

  update(sceneSettings: C_S_Settings, camera: PerspectiveCamera) {
    this.settings = sceneSettings;

    this.updateCamera(camera);
    this.updateControls();
    this.setMapperCamera();
    this.setMapperProgress();
  }

  render({ renderer }: { renderer: WebGLRenderer }) {
    this.progress = this.mapperProgress();

    if (this.progress.state === "active" || this.progress.state === "next") {
      this.mapperCamera({ progress: this.progress, camera: this.camera, controls: this.controls });

      this.elements.forEach((item) => {
        const progress = this.settings.mode === "auto" ? this.progress.auto : this.progress.main;
        item.animate(progress, this.progress.entry);
      });

      this.controls.update();
      renderer.render(this.scene, this.camera);
    }
  }
}