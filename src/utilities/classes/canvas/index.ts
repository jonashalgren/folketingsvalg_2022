import type { Canvas_Settings, Viewport, S_E_Mesh_Templates, S_Settings } from "@models";
import { PerspectiveCamera, WebGLRenderer } from "three";
import { Scene, Background } from "@classes";
import { _rAF } from "@stores";
import { getCanvasSettings } from "./getCanvasSettings";
import { getProcessedSettings } from "./getProcessedSettings";

export class Canvas {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  scenes: Scene[];
  background: Background;
  canvasSettings: Canvas_Settings;

  constructor(
    public scenesSettings: S_Settings[],
    public canvasDOMElement: HTMLCanvasElement,
    public contentDOMElement: HTMLDivElement,
    public sceneElementsMeshTemplates: S_E_Mesh_Templates,
    public viewport: Viewport
  ) {
    this.renderer = new WebGLRenderer({ antialias: true, canvas: this.canvasDOMElement, logarithmicDepthBuffer: true });
    this.setCanvasSettings();
    this.setRenderer();
    this.setCamera();
    this.setCanvasDOMStyles();
    this.setScenesSettings(scenesSettings);
    this.setScenes();
    this.setBackground();
  }

  private setCanvasSettings() {
    this.canvasSettings = getCanvasSettings({ viewport: this.viewport });
  }

  private setScenesSettings(scenesSettings: S_Settings[]) {
    this.scenesSettings = getProcessedSettings({ scenesSettings, camera: this.camera, contentDOMElement: this.contentDOMElement, viewport: this.viewport }).scenesSettings;
  }

  private setCanvasDOMStyles() {
    this.canvasDOMElement.style.left = `${this.canvasSettings.left}px`;
  }

  private setCamera() {
    this.camera = new PerspectiveCamera(50, this.canvasSettings.width / this.canvasSettings.height, 0.1, 1000);
  }

  private setRenderer() {
    this.renderer.setSize(this.canvasSettings.width, this.viewport.h);
    this.renderer.setPixelRatio(this.viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
  }

  private setScenes() {
    this.scenes = this.scenesSettings.map(
      (sceneSettings) => new Scene(sceneSettings, this.sceneElementsMeshTemplates, this.camera, this.canvasDOMElement, this.contentDOMElement, this.viewport)
    );
  }
  private setBackground() {
    this.background = new Background(this.canvasDOMElement, this.camera, this.viewport);
  }

  animate() {
    this.background.render({ renderer: this.renderer });
    this.renderer.autoClear = false;
    this.renderer.clearDepth();
    this.scenes.forEach((scene: Scene) => scene.render({ renderer: this.renderer }));
    this.renderer.autoClear = true;
  }
}
