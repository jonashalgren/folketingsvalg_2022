import type { C_Settings, Viewport, C_S_E_Details, C_S_Settings } from "@models";
import { PerspectiveCamera, WebGLRenderer } from "three";
import { Canvas_Scene, Canvas_Background } from "@classes";
import { _rAF } from "@stores";
import { getCanvasSettings } from "./getCanvasSettings";
import { getProcessedSettings } from "./getProcessedSettings";
import { scenesSettings } from "@assets";

export class Canvas {
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scenes: Canvas_Scene[];
  private background: Canvas_Background;
  private canvasSettings: C_Settings;
  private scenesSettings: C_S_Settings[];

  constructor(
    private canvasDOMElement: HTMLCanvasElement,
    private contentDOMElement: HTMLDivElement,
    private canvasSceneElementsDetails: C_S_E_Details,
    private viewport: Viewport
  ) {
    this.renderer = new WebGLRenderer({ antialias: true, canvas: this.canvasDOMElement, logarithmicDepthBuffer: true });
    this.setCanvasSettings();
    this.setRenderer();
    this.setCamera();
    this.setCanvasDOMStyles();
    this.setScenesSettings();
    this.setScenes();
    this.setBackground();
  }

  private setCanvasSettings() {
    this.canvasSettings = getCanvasSettings({ viewport: this.viewport });
  }

  private setScenesSettings() {
    this.scenesSettings = getProcessedSettings({
      scenesSettings,
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

  private updateCamera() {
    this.camera.aspect = this.canvasSettings.width / this.canvasSettings.height;
    this.camera.updateProjectionMatrix();
  }

  private setRenderer() {
    this.renderer.setSize(this.canvasSettings.width, this.viewport.h);
    this.renderer.setPixelRatio(this.viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
  }

  private setScenes() {
    this.scenes = this.scenesSettings.map(
      (sceneSettings) => new Canvas_Scene(this.renderer, sceneSettings, this.canvasSceneElementsDetails, this.camera, this.canvasDOMElement, this.contentDOMElement, this.viewport)
    );
  }

  private updateScenes() {
    this.scenesSettings.forEach((sceneSettings, index) => {
      this.scenes[index].resize(sceneSettings, this.camera);
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
    this.setScenesSettings();

    this.updateBackground();
    this.updateScenes();
  }

  update() {
    this.background.update();
    this.renderer.autoClear = false;
    this.renderer.clearDepth();
    this.scenes.forEach((scene: Canvas_Scene) => scene.update());
    this.renderer.autoClear = true;
  }
}
