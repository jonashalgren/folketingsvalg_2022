import type { C_Settings, Viewport, C_C_Element_Details, C_Content_Settings } from "@models";
import { PerspectiveCamera, WebGLRenderer } from "three";
import { Canvas_Content, Canvas_Background } from "@classes";
import { _rAF } from "@stores";
import { getProcessedContentSettingsList } from "./getProcessedContentSettingsList";
import { contentSettingsList } from "@assets";

export class Canvas {
  private canvasDOMElement: HTMLCanvasElement;
  private contentDOMElement: HTMLDivElement;
  private canvasContentElementsDetails: C_C_Element_Details;
  private viewport: Viewport;

  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private contentList: Canvas_Content[];
  private background: Canvas_Background;
  private canvasSettings: C_Settings;
  private contentSettingsList: C_Content_Settings[];

  constructor(canvasDOMElement: HTMLCanvasElement, contentDOMElement: HTMLDivElement, canvasContentElementsDetails: C_C_Element_Details, viewport: Viewport) {
    this.canvasDOMElement = canvasDOMElement;
    this.contentDOMElement = contentDOMElement;
    this.canvasContentElementsDetails = canvasContentElementsDetails;
    this.viewport = viewport;

    this.renderer = new WebGLRenderer({ antialias: true, canvas: this.canvasDOMElement, logarithmicDepthBuffer: true });
    this.setCanvasSettings();
    this.setRenderer();
    this.setCamera();
    this.setCanvasDOMStyles();
    this.setContentSettingsList();
    this.setContent();
    this.setBackground();
    this.removePreloader();
  }

  private removePreloader() {
    const preloaderElement = <HTMLDivElement>document.getElementById("preloader");
    if (preloaderElement) {
      setTimeout(() => {
        preloaderElement.style.opacity = "0";
      }, 300);
      setTimeout(() => {
        preloaderElement.remove();
      }, 1000);
    }
  }

  private setCanvasSettings() {
    const hasOffset = (this.viewport.h * 1.2) / this.viewport.w < 1;
    const left = -(hasOffset ? ((this.viewport.h / this.viewport.w) * this.viewport.w) / 4 : 0);
    const width = -left + this.viewport.w;
    this.canvasSettings = { left, width, height: this.viewport.h };
  }

  private setContentSettingsList() {
    this.contentSettingsList = getProcessedContentSettingsList({
      contentSettingsList,
      camera: this.camera,
      contentDOMElement: this.contentDOMElement,
      viewport: this.viewport,
    }).contentSettingsList;
  }

  private setCanvasDOMStyles() {
    this.canvasDOMElement.style.left = `${this.canvasSettings.left}px`;
  }

  private setCamera() {
    this.camera = new PerspectiveCamera(50, this.canvasSettings.width / this.canvasSettings.height, 0.1, 1000);
  }

  private updateCamera() {
    this.camera.aspect = this.canvasSettings.width / this.canvasSettings.height;
    this.camera.updateProjectionMatrix();
  }

  private setRenderer() {
    this.renderer.setSize(this.canvasSettings.width, this.viewport.h);
    this.renderer.setPixelRatio(this.viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
  }

  private setContent() {
    this.contentList = this.contentSettingsList.map(
      (contentSettings) =>
        new Canvas_Content(this.renderer, this.camera, this.canvasDOMElement, contentSettings, this.canvasContentElementsDetails, this.contentDOMElement, this.viewport)
    );
  }

  private updateContent() {
    this.contentSettingsList.forEach((contentSettings, index) => {
      this.contentList[index].resize(this.camera, contentSettings);
    });
  }

  private setBackground() {
    this.background = new Canvas_Background(this.renderer, this.canvasDOMElement, this.camera);
  }

  private updateBackground() {
    this.background.resize(this.camera);
  }

  resize(viewport: Viewport) {
    this.viewport = viewport;

    this.setCanvasSettings();
    this.setRenderer();
    this.updateCamera();
    this.setCanvasDOMStyles();
    this.setContentSettingsList();

    this.updateBackground();
    this.updateContent();
  }

  update() {
    this.background.update();
    this.renderer.autoClear = false;
    this.renderer.clearDepth();
    this.contentList.forEach((content: Canvas_Content) => content.update());
    this.renderer.autoClear = true;
  }
}
