import type { S, S_Original_Blocks, CanvasProperties, S_Three_Render, S_Progress } from "@models";
import { AmbientLight, SpotLight, WebGLRenderer, GridHelper, Group, Vector3 } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import { Scene_Element_Image } from "@classes";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getAnimate } from "./getAnimate";
import { getOutputOffsetZ } from "./getOutputOffsetZ";
import { getProcessedData } from "./getProcessedData";

export class Scene {
  scene: ThreeScene;
  camera: PerspectiveCamera;
  spotLight: SpotLight;
  ambientLight: AmbientLight;
  controls: OrbitControls;
  elementGroup: Group;
  image_elements: Scene_Element_Image[];
  outputOffsetZ: number;
  bbox: { x: number; y: number };
  animate: ({ scrollY }: S_Three_Render) => void;

  constructor(
    public data: S,
    public original_blocks: S_Original_Blocks,
    public canvas: HTMLCanvasElement,
    public canvasProperties: CanvasProperties,
    public sceneProgress: S_Progress
  ) {
    const { image } = data.elements;

    this.camera = new PerspectiveCamera();
    this.scene = new ThreeScene();
    this.spotLight = new SpotLight(0xffffff, 0.4);
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.elementGroup = new Group();

    this.bbox = data.bbox ?? { x: 100, y: 100 };
    this.outputOffsetZ = getOutputOffsetZ({ camera: this.camera, bbox: this.bbox });

    this.data = getProcessedData({ data, outputOffsetZ: this.outputOffsetZ });

    this.setLight();
    this.setGrid();
    this.setControls();
    this.setElementGroup();

    this.animate = getAnimate({
      data: this.data,
      group: this.elementGroup,
      scene: this.scene,
      camera: this.camera,
      controls: this.controls,
      sceneProgress: this.sceneProgress,
      canvasProperties: this.canvasProperties,
      original_blocks: this.original_blocks,
    }).animate;

    this.image_elements = image?.map((data) => new Scene_Element_Image(data, original_blocks.image)) ?? [];
  }

  setLight() {
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
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  setElementGroup() {
    this.scene.add(this.elementGroup);
  }

  render({ scrollY, renderer }: { scrollY: number; renderer: WebGLRenderer }) {
    this.animate({ scrollY });
    this.controls.update();
    renderer.render(this.scene, this.camera);
  }

  static function;
}
