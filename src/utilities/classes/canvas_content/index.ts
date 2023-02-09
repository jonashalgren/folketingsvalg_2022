import type { C_S_E_Mesh, C_S_Camera_Mapper, C_S_Progress, C_S_Settings, C_S_S_Element, Viewport, C_S_E_Details } from "@models";
import { AmbientLight, SpotLight, WebGLRenderer, GridHelper } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import type { Canvas_Content_Element } from "@abstract_classes";

export class Canvas_Content {
  private scene: ThreeScene;
  private spotLight: SpotLight;
  private ambientLight: AmbientLight;
  private controls: OrbitControls;
  private elements: Canvas_Content_Element<C_S_S_Element, C_S_E_Mesh[]>[];
  private progress: C_S_Progress;

  mapperProgress: () => C_S_Progress;
  mapperCamera: (props: C_S_Camera_Mapper) => void;

  constructor(
    private renderer: WebGLRenderer,
    private sceneSettings: C_S_Settings,
    private canvasSceneElementsDetails: C_S_E_Details,
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
    this.mapperCamera = getMapperCamera({ sceneSettings: this.sceneSettings }).mapper;
  }

  private setMapperProgress() {
    this.mapperProgress = getMapperProgress({ contentDOMElement: this.contentDOMElement, sceneSettings: this.sceneSettings, viewport: this.viewport }).mapper;
  }

  private setElements() {
    this.elements = getElements({ sceneSettings: this.sceneSettings, canvasSceneElementsDetails: this.canvasSceneElementsDetails });
  }

  private updateElements() {
    this.elements.forEach((element) => {
      const progress = this.sceneSettings.mode === "auto" ? this.progress.auto : this.progress.main;
      element.update(progress, this.progress.entry);
    });
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

  private updateRenderer() {
    this.renderer.render(this.scene, this.camera);
  }

  resize(sceneSettings: C_S_Settings, camera: PerspectiveCamera) {
    this.sceneSettings = sceneSettings;
    this.updateCamera(camera);
    this.updateControls();
    this.setMapperCamera();
    this.setMapperProgress();
  }

  update() {
    this.progress = this.mapperProgress();

    if (this.progress.state === "active" || this.progress.state === "next") {
      this.mapperCamera({ progress: this.progress, camera: this.camera, controls: this.controls });
      this.updateElements();
      this.updateControls();

      this.updateRenderer();
    }
  }
}
