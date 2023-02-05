import type {
  Canvas_Settings,
  S_E_Mesh,
  S_E_Mesh_Templates,
  S_Camera_Mapper,
  Content_Section_Offsets,
  S_Progress_Mapper,
  S_Progress,
  S_Settings,
  S_S_Element,
  Viewport,
} from "@models";
import { AmbientLight, SpotLight, WebGLRenderer, GridHelper } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import { getProcessedSettings } from "./getProcessedSettings";
import type { Scene_Element } from "../scene_element";

export class Scene {
  scene: ThreeScene;
  camera: PerspectiveCamera;
  spotLight: SpotLight;
  ambientLight: AmbientLight;
  controls: OrbitControls;

  elements: Scene_Element<S_S_Element, S_E_Mesh[]>[];
  progress: S_Progress;

  mapperProgress: S_Progress_Mapper;
  mapperCamera: (props: S_Camera_Mapper) => void;

  constructor(
    public settings: S_Settings,
    public elementsMeshTemplates: S_E_Mesh_Templates,
    public canvasDOMElement: HTMLCanvasElement,
    public canvasSettings: Canvas_Settings,
    public contentDOMElement: HTMLDivElement,
    public viewport: Viewport
  ) {
    this.scene = new ThreeScene();
    this.camera = new PerspectiveCamera(50, canvasSettings.width / canvasSettings.height, 0.1, 1000);
    this.settings = getProcessedSettings({ camera: this.camera, settings }).settings;
    this.elements = getElements({ settings, elementsMeshTemplates });
    this.mapperCamera = getMapperCamera({ settings }).mapper;
    this.mapperProgress = getMapperProgress({ contentDOMElement, settings, viewport }).mapper;

    this.setLight();
    this.setGrid();
    this.setControls();
    this.setCamera();
    this.addElementMeshesToScene();
  }

  setLight() {
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.spotLight.position.set(0, 0, 200);
    this.ambientLight.position.set(0, 0, 200);
    this.scene.add(this.spotLight, this.ambientLight);
  }

  setGrid() {
    const gridXZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridXY = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridYZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    gridXY.rotation.x = Math.PI / 2;
    gridYZ.rotation.z = Math.PI / 2;
    this.scene.add(gridYZ, gridXZ, gridXY);
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.canvasDOMElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  setCamera() {
    this.camera.up.set(0, 0, 1);
  }

  addElementMeshesToScene() {
    this.elements.forEach((element) => {
      this.scene.add(element.group);
    });
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
