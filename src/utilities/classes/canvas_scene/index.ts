import {
  type C_S_Element_Mesh,
  type C_Scene_Camera_Mapper,
  type C_Scene_Progress_Mapper,
  type C_Scene_Opacity_Mapper,
  type C_Scene_Settings,
  type C_S_S_Element,
  type Viewport,
  type C_Scene_Progress,
  type C_S_Elements_Meshes,
  type C_Settings,
  C_S_Element_Type,
} from "@models";
import { type WebGLRenderer, GridHelper } from "three";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import { Canvas_Item, type Canvas_Scene_Element } from "@classes_abstract";
import { interpolate } from "popmotion";
import { getBoundingBox } from "./getBoundingBox";

type Props = {
  renderer: WebGLRenderer;
  canvasSettings: C_Settings;
  canvasDOMElement: HTMLCanvasElement;

  sceneIndex: number;
  sceneSettings: C_Scene_Settings;
  elementsMeshes: C_S_Elements_Meshes;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
  isLastScene: boolean;
};

export class Canvas_Scene extends Canvas_Item {
  private sceneIndex: number;
  private sceneSettings: C_Scene_Settings;
  private elementsMeshes: C_S_Elements_Meshes;
  private contentDOMElement: HTMLDivElement;
  private viewport: Viewport;
  private isLastScene: boolean;

  private elements: Canvas_Scene_Element<C_S_S_Element, C_S_Element_Mesh[]>[];

  mapperProgress: C_Scene_Progress_Mapper;
  mapperCamera: C_Scene_Camera_Mapper;
  mapperOpacity: C_Scene_Opacity_Mapper;

  constructor({ renderer, canvasSettings, canvasDOMElement, sceneSettings, elementsMeshes, contentDOMElement, viewport, isLastScene, sceneIndex }: Props) {
    super({ renderer, canvasDOMElement, canvasSettings, boundingBox: getBoundingBox({ sceneSettings }) });

    this.sceneIndex = sceneIndex;
    this.sceneSettings = sceneSettings;
    this.elementsMeshes = elementsMeshes;
    this.contentDOMElement = contentDOMElement;
    this.viewport = viewport;
    this.isLastScene = isLastScene;

    this.setElements();
    this.setMapperCamera();
    this.setMapperProgress();
    this.setMapperOpacity();
    this.setGrid();
    this.addElementMeshesToScene(this.elements.flatMap((element) => element.meshes));
  }

  private setElements() {
    this.elements = getElements({ sceneSettings: this.sceneSettings, elementsMeshes: this.elementsMeshes, dimensionZ: this.dimensionZ });
  }

  private setMapperCamera() {
    this.mapperCamera = getMapperCamera({ sceneSettings: this.sceneSettings, dimensionZ: this.dimensionZ }).mapper;
  }

  private setMapperProgress() {
    this.mapperProgress = getMapperProgress({
      sceneIndex: this.sceneIndex,
      contentDOMElement: this.contentDOMElement,
      sceneSettings: this.sceneSettings,
      viewport: this.viewport,
      isLastScene: this.isLastScene,
    }).mapper;
  }

  private setMapperOpacity() {
    const hasTransition = Boolean(this.sceneSettings.elements.find((item) => item.type === C_S_Element_Type.TRANSITION));
    this.mapperOpacity = interpolate(hasTransition ? [0, 0.2, 0.5] : [0, 0.6, 0.9], [0, 0, 1]);
  }

  private setGrid() {
    const gridXZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridXY = new GridHelper(100, 10, "#000", "#aaaaaa");
    const gridYZ = new GridHelper(100, 10, "#000", "#aaaaaa");
    gridXY.rotation.x = Math.PI / 2;
    gridYZ.rotation.z = Math.PI / 2;
    this.scene.add(gridYZ, gridXZ, gridXY);
  }

  private animateElements(progress: C_Scene_Progress, opacity: number) {
    const progressMain = this.sceneSettings.mode === "auto" ? progress.auto : progress.main;
    this.elements.forEach((element) => {
      element.animate(progressMain, progress.entry, opacity);
    });
  }

  private moveCamera(progress: C_Scene_Progress) {
    const { positionEntry, positionExit, positionMain, targetEntry, targetExit, targetMain } = this.mapperCamera(progress);
    if (progress.exit > 0) {
      this.camera.position.set(...positionExit);
      this.controls.target.set(...targetExit);
    } else if (progress.main > 0) {
      this.camera.position.set(...positionMain);
      this.controls.target.set(...targetMain);
    } else if (progress.entry > 0) {
      this.camera.position.set(...positionEntry);
      this.controls.target.set(...targetEntry);
    }
  }

  resizing() {
    this.setMapperCamera();
    this.setMapperProgress();
  }

  animate() {
    const progress = this.mapperProgress();
    const opacity = this.mapperOpacity(progress.entry);
    if (progress.state === "active" || progress.state === "next") {
      this.moveCamera(progress);
      this.animateElements(progress, opacity);
      this.render();
    }
  }
}
