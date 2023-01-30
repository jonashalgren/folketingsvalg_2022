import type {
  S,
  CanvasProperties,
  S_E_Mesh,
  S_Camera_Mapper,
  TextPosition,
  S_Progress_Mapper,
  S_Progress,
  S_E_Mesh_Collection,
  S_E_Data,
  S_Bounding_Box,
} from "@models";
import { AmbientLight, SpotLight, WebGLRenderer, GridHelper } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import { getDimensionZ } from "./getDimensionZ";
import type { Scene_Element } from "../scene_element";

export class Scene {
  scene: ThreeScene;
  camera: PerspectiveCamera;
  spotLight: SpotLight;
  ambientLight: AmbientLight;
  controls: OrbitControls;

  dimensionZ: number;
  boundingBox: S_Bounding_Box;
  elements: Scene_Element<S_E_Data, S_E_Mesh[]>[];
  progress: S_Progress;

  mapperProgress: S_Progress_Mapper;
  mapperCamera: S_Camera_Mapper;

  constructor(
    public data: S,
    public elementMeshesCollection: S_E_Mesh_Collection,
    public canvas: HTMLCanvasElement,
    public canvasProperties: CanvasProperties,
    public textPosition: TextPosition
  ) {
    this.scene = new ThreeScene();
    this.camera = new PerspectiveCamera(50, canvasProperties.width / canvasProperties.height, 0.1, 1000);

    this.boundingBox = data.boundingBox ?? { x: 100, y: 100 };
    this.dimensionZ = getDimensionZ({ boundingBox: this.boundingBox, camera: this.camera });
    this.elements = getElements({ elementDataCollection: data.elements, elementMeshesCollection });

    this.mapperCamera = getMapperCamera({ data, dimensionZ: this.dimensionZ }).mapper;
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
      this.scene.add(element.group);
    });
  }

  render({ renderer }: { renderer: WebGLRenderer }) {
    this.setProgress();

    if (this.progress.state === "active" || this.progress.state === "next") {
      this.mapperCamera({ progress: this.progress, camera: this.camera, controls: this.controls });
      this.elements.forEach((item) => item.animate(this.progress));
      this.controls.update();
      renderer.render(this.scene, this.camera);
    }
  }
}
