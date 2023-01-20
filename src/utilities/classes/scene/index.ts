import type {
  S,
  CanvasProperties,
  S_E_Meshes,
  S_Camera_Mapper,
  TextPosition,
  S_Progress_Mapper,
  S_Progress,
  S_E_Meshes_Collection,
  S_E_Data,
} from "@models";
import { AmbientLight, SpotLight, WebGLRenderer, GridHelper } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getProcessedData } from "./getProcessedData";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import type { Scene_Element } from "../scene_element";

export class Scene {
  scene: ThreeScene;
  camera: PerspectiveCamera;
  spotLight: SpotLight;
  ambientLight: AmbientLight;
  controls: OrbitControls;
  elements: Scene_Element<S_E_Data, S_E_Meshes>[];

  mapperProgress: S_Progress_Mapper;
  mapperCamera: S_Camera_Mapper;

  progress: S_Progress;

  constructor(
    public data: S,
    public elementMeshesCollection: S_E_Meshes_Collection,
    public canvas: HTMLCanvasElement,
    public canvasProperties: CanvasProperties,
    public textPosition: TextPosition
  ) {
    this.scene = new ThreeScene();
    this.camera = new PerspectiveCamera(50, canvasProperties.width / canvasProperties.height, 0.1, 1000);

    this.data = getProcessedData({ data, camera: this.camera });
    this.elements = getElements({ elementDataCollection: this.data.elements, elementMeshesCollection });

    this.mapperCamera = getMapperCamera({ data: this.data });
    this.mapperProgress = getMapperProgress({ textPosition }).mapper;

    this.setLight();
    this.setGrid();
    this.setControls();
    this.setCamera();
    this.setProgress();
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
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  setCamera() {
    this.camera.up.set(0, 0, 1);
  }

  setProgress() {
    this.progress = this.mapperProgress({ scrollY });
  }

  addElementMeshesToScene() {
    this.elements.forEach((element) => {
      this.scene.add(...element.meshes);
    });
  }

  render({ renderer }: { renderer: WebGLRenderer }) {
    this.setProgress();

    if (this.progress.state === "active" || this.progress.state === "next") {
      this.mapperCamera({ progress: this.progress, camera: this.camera, controls: this.controls });
      this.controls.update();
      renderer.render(this.scene, this.camera);
    }
  }
}
