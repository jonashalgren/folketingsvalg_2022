import type {
  C_S_Element_Mesh,
  C_Scene_Camera_Mapper,
  C_Scene_Progress_Mapper,
  C_Scene_Opacity_Mapper,
  C_Scene_Settings,
  C_S_S_Element,
  Viewport,
  C_Scene_Progress,
  C_S_Elements_Meshes,
} from "@models";
import type { WebGLRenderer, PerspectiveCamera } from "three";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import { Canvas_Item, type Canvas_Scene_Element } from "@classes_abstract";
import { interpolate } from "popmotion";

export class Canvas_Scene extends Canvas_Item {
  private sceneSettings: C_Scene_Settings;
  private elementsMeshes: C_S_Elements_Meshes;
  private contentDOMElement: HTMLDivElement;
  private viewport: Viewport;
  private isLastScene: boolean;

  private elements: Canvas_Scene_Element<C_S_S_Element, C_S_Element_Mesh[]>[];

  mapperProgress: C_Scene_Progress_Mapper;
  mapperCamera: C_Scene_Camera_Mapper;
  mapperOpacity: C_Scene_Opacity_Mapper;

  constructor(
    renderer: WebGLRenderer,
    camera: PerspectiveCamera,
    canvasDOMElement: HTMLCanvasElement,
    sceneSettings: C_Scene_Settings,
    elementsMeshes: C_S_Elements_Meshes,
    contentDOMElement: HTMLDivElement,
    viewport: Viewport,
    isLastScene: boolean
  ) {
    super(renderer, canvasDOMElement, camera);

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

  private setMapperCamera() {
    this.mapperCamera = getMapperCamera({ sceneSettings: this.sceneSettings }).mapper;
  }

  private setMapperProgress() {
    this.mapperProgress = getMapperProgress({
      contentDOMElement: this.contentDOMElement,
      sceneSettings: this.sceneSettings,
      viewport: this.viewport,
      isLastScene: this.isLastScene,
    }).mapper;
  }

  private setMapperOpacity() {
    this.mapperOpacity = interpolate(this.sceneSettings.hasTransition ? [0, 0.2, 0.5] : [0, 0.6, 0.9], [0, 0, 1]);
  }

  private setElements() {
    this.elements = getElements({ sceneSettings: this.sceneSettings, elementsMeshes: this.elementsMeshes });
  }

  private animateElements(progress: C_Scene_Progress, opacity: number) {
    const progressMain = this.sceneSettings.mode === "auto" ? progress.auto : progress.main;
    this.elements.forEach((element) => {
      element.update(progressMain, progress.entry, opacity);
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

  resize(camera: PerspectiveCamera, sceneSettings: C_Scene_Settings) {
    this.sceneSettings = sceneSettings;
    this.setCameraAspect(camera);
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
