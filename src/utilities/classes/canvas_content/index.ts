import type {
  C_C_Element_Mesh,
  C_Content_Camera_Mapper,
  C_Content_Progress,
  C_Content_Progress_Mapper,
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

export class Canvas_Content extends Canvas_Scene {
  private contentSettings: C_Content_Settings;
  private canvasContentElementsDetails: C_C_Element_Details;
  private contentDOMElement: HTMLDivElement;
  private viewport: Viewport;

  private elements: Canvas_Content_Element<C_S_S_Element, C_C_Element_Mesh[]>[];
  private progress: C_Content_Progress;
  mapperProgress: C_Content_Progress_Mapper;
  mapperCamera: C_Content_Camera_Mapper;

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
    this.setGrid();
    this.addElementMeshesToScene(this.elements.flatMap((element) => element.meshes));
  }

  private setMapperCamera() {
    this.mapperCamera = getMapperCamera({ contentSettings: this.contentSettings }).mapper;
  }

  private setMapperProgress() {
    this.mapperProgress = getMapperProgress({ contentDOMElement: this.contentDOMElement, contentSettings: this.contentSettings, viewport: this.viewport }).mapper;
  }

  private setElements() {
    this.elements = getElements({ contentSettings: this.contentSettings, canvasContentElementsDetails: this.canvasContentElementsDetails });
  }

  private updateElements() {
    this.elements.forEach((element) => {
      const progress = this.contentSettings.mode === "auto" ? this.progress.auto : this.progress.main;
      element.update(progress, this.progress.entry);
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
    this.progress = this.mapperProgress();

    if (this.progress.state === "active" || this.progress.state === "next") {
      this.mapperCamera({ progress: this.progress, camera: this.camera, controls: this.controls });
      this.updateElements();
      this.updateControls();

      this.updateRenderer();
    }
  }
}
