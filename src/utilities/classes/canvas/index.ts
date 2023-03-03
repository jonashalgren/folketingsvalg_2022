import type { C_Settings, Viewport, C_Scene_Settings, C_S_Elements_Meshes } from "@models";
import { PerspectiveCamera, WebGLRenderer } from "three";
import { Canvas_Scene, Canvas_Background } from "@classes";
import { _rAF } from "@stores";
import { getProcessedScenesSettings } from "./getProcessedScenesSettings";

export class Canvas {
  private canvasDOMElement: HTMLCanvasElement;
  private contentDOMElement: HTMLDivElement;
  private scenesSettings: C_Scene_Settings[];
  private elementsMeshes: C_S_Elements_Meshes;
  private viewport: Viewport;

  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scenes: Canvas_Scene[];
  private background: Canvas_Background;
  private canvasSettings: C_Settings;

  constructor(
    canvasDOMElement: HTMLCanvasElement,
    contentDOMElement: HTMLDivElement,
    scenesSettings: C_Scene_Settings[],
    elementsMeshes: C_S_Elements_Meshes,
    viewport: Viewport
  ) {
    this.canvasDOMElement = canvasDOMElement;
    this.contentDOMElement = contentDOMElement;
    this.scenesSettings = scenesSettings;
    this.elementsMeshes = elementsMeshes;
    this.viewport = viewport;

    this.setRenderer();
    this.setCanvasSettings();
    this.setRendererSize();
    this.setCamera();
    this.setCanvasDOMStyles();
    this.setScenesSettings();
    this.setScenes();
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

  private setScenesSettings() {
    this.scenesSettings = getProcessedScenesSettings({
      scenesSettings: this.scenesSettings,
      camera: this.camera,
      contentDOMElement: this.contentDOMElement,
      viewport: this.viewport,
    }).scenesSettings;
  }

  private setCanvasDOMStyles() {
    this.canvasDOMElement.style.left = `${this.canvasSettings.left}px`;
  }

  private setCamera() {
    this.camera = new PerspectiveCamera(50, this.canvasSettings.width / this.canvasSettings.height, 0.1, 1000);
  }

  private setCameraAspect() {
    this.camera.aspect = this.canvasSettings.width / this.canvasSettings.height;
    this.camera.updateProjectionMatrix();
  }

  private setRenderer() {
    this.renderer = new WebGLRenderer({ antialias: true, canvas: this.canvasDOMElement, logarithmicDepthBuffer: true });
  }

  private setRendererSize() {
    this.renderer.setSize(this.canvasSettings.width, this.viewport.h);
    this.renderer.setPixelRatio(this.viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
  }

  private setScenes() {
    this.scenes = this.scenesSettings.map((sceneSettings, index) => {
      const isLastScene = index === this.scenesSettings.length - 1;
      return new Canvas_Scene({
        renderer: this.renderer,
        camera: this.camera,
        canvasDOMElement: this.canvasDOMElement,
        sceneSettings: sceneSettings,
        elementsMeshes: this.elementsMeshes,
        contentDOMElement: this.contentDOMElement,
        viewport: this.viewport,
        isLastScene,
      });
    });
  }

  private resizeScenes() {
    this.scenesSettings.forEach((sceneSettings, index) => {
      this.scenes[index].resize(this.camera, sceneSettings);
    });
  }

  private setBackground() {
    this.background = new Canvas_Background({ renderer: this.renderer, camera: this.camera, canvasDOMElement: this.canvasDOMElement });
  }

  private resizeBackground() {
    this.background.resize(this.camera);
  }

  resize(viewport: Viewport) {
    this.viewport = viewport;

    this.setCanvasSettings();
    this.setRendererSize();
    this.setCameraAspect();
    this.setCanvasDOMStyles();
    this.setScenesSettings();

    this.resizeBackground();
    this.resizeScenes();
  }

  animate() {
    this.background.animate();
    this.renderer.autoClear = false;
    this.renderer.clearDepth();
    this.scenes.forEach((scene: Canvas_Scene) => scene.animate());
    this.renderer.autoClear = true;
  }
}
