import type {
  C_C_Element_Mesh,
  C_Content_Camera_Mapper,
  C_Content_Progress,
  C_Content_Progress_Mapper,
  C_Content_Opacity_Mapper,
  C_Content_Settings,
  C_S_S_Element,
  Viewport,
  C_C_Element_Details,
} from "@models";
import type { WebGLRenderer, PerspectiveCamera } from "three";
import { getElements } from "./getElements";
import { getMapperCamera } from "./getMapperCamera";
import { getMapperProgress } from "./getMapperProgress";
import { Canvas_Scene, type Canvas_Content_Element } from "@classes_abstract";
import { interpolate } from "popmotion";

export class Canvas_Content extends Canvas_Scene {
  private contentSettings: C_Content_Settings;
  private canvasContentElementsDetails: C_C_Element_Details;
  private contentDOMElement: HTMLDivElement;
  private viewport: Viewport;

  private elements: Canvas_Content_Element<C_S_S_Element, C_C_Element_Mesh[]>[];

  mapperProgress: C_Content_Progress_Mapper;
  mapperCamera: C_Content_Camera_Mapper;
  mapperOpacity: C_Content_Opacity_Mapper;

  constructor(
    renderer: WebGLRenderer,
    camera: PerspectiveCamera,
    canvasDOMElement: HTMLCanvasElement,

    contentSettings: C_Content_Settings,
    canvasContentElementsDetails: C_C_Element_Details,
    contentDOMElement: HTMLDivElement,
    viewport: Viewport
  ) {
    super(renderer, canvasDOMElement, camera);

    this.contentSettings = contentSettings;
    this.canvasContentElementsDetails = canvasContentElementsDetails;
    this.contentDOMElement = contentDOMElement;
    this.viewport = viewport;

    this.setElements();
    this.setMapperCamera();
    this.setMapperProgress();
    this.setMapperOpacity();
    this.setGrid();
    this.addElementMeshesToScene(this.elements.flatMap((element) => element.meshes));
  }

  private setMapperCamera() {
    this.mapperCamera = getMapperCamera({ contentSettings: this.contentSettings }).mapper;
  }

  private setMapperProgress() {
    this.mapperProgress = getMapperProgress({ contentDOMElement: this.contentDOMElement, contentSettings: this.contentSettings, viewport: this.viewport }).mapper;
  }

  private setMapperOpacity() {
    this.mapperOpacity = interpolate(this.contentSettings.hasTransition ? [0.2, 0.5] : [0.6, 0.9], [0, 1]);
  }

  private setElements() {
    this.elements = getElements({ contentSettings: this.contentSettings, canvasContentElementsDetails: this.canvasContentElementsDetails });
  }

  private updateElements({ progress, progressEntry, opacity }: { progress: number; progressEntry: number; opacity: number }) {
    this.elements.forEach((element) => {
      element.update(progress, progressEntry, opacity);
    });
  }

  resize(camera: PerspectiveCamera, contentSettings: C_Content_Settings) {
    this.contentSettings = contentSettings;
    this.updateCamera(camera);
    this.updateControls();
    this.setMapperCamera();
    this.setMapperProgress();
  }

  update() {
    const progress = this.mapperProgress();
    const opacity = this.mapperOpacity(progress.entry);

    if (progress.state === "active" || progress.state === "next") {
      this.mapperCamera({ progress: progress, camera: this.camera, controls: this.controls });
      this.updateElements({ progress: this.contentSettings.mode === "auto" ? progress.auto : progress.main, progressEntry: progress.entry, opacity });
      this.updateControls();
      this.updateRenderer();
    }
  }
}
