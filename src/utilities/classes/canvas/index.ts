import type { Canvas_Settings, S_Settings, Viewport, S_E_Mesh_Templates, Canvas_Init } from "@models";
import { WebGLRenderer } from "three";
import { Scene, Background } from "@classes";
import { _rAF } from "@stores";
import { scenesSettings } from "@assets";

export class Canvas {
  canvasDOMElement: HTMLCanvasElement;
  contentDOMElement: HTMLDivElement;
  renderer: WebGLRenderer;
  scenes: Scene[];
  background: Background;
  canvasSettings: Canvas_Settings;
  viewport: Viewport;
  sceneElementsMeshTemplates: S_E_Mesh_Templates;

  animate: () => void;
  unsubscribe: () => void;

  init(canvasDOMElement: HTMLCanvasElement, { viewport, sceneElementsMeshTemplates, contentDOMElement }: Canvas_Init) {
    this.sceneElementsMeshTemplates = sceneElementsMeshTemplates;
    this.viewport = viewport;
    this.canvasDOMElement = canvasDOMElement;
    this.contentDOMElement = contentDOMElement;

    this.renderer = new WebGLRenderer({ antialias: true, canvas: this.canvasDOMElement, logarithmicDepthBuffer: true });

    this.setCanvasSettings();
    this.setRenderer();
    this.setScenes();
    this.setBackground();
    this.setAnimate();

    this.unsubscribe = function () {};
    this.unsubscribe();
    this.unsubscribe = _rAF.add(this.animate, 16.6);

    return {
      update: ({ viewport, sceneElementsMeshTemplates }: Canvas_Init) => {
        this.sceneElementsMeshTemplates = sceneElementsMeshTemplates;
        this.viewport = viewport;

        this.setCanvasSettings();
        this.setRenderer();
        this.setScenes();
        this.setBackground();
        this.setAnimate();
        console.log(this);

        this.unsubscribe();
        this.unsubscribe = _rAF.add(this.animate, 16.6);
      },
    };
  }

  private setCanvasSettings() {
    const hasOffset = (this.viewport.h * 1.2) / this.viewport.w < 1;
    const left = -(hasOffset ? ((this.viewport.h / this.viewport.w) * this.viewport.w) / 4 : 0);
    const width = -left + this.viewport.w;
    this.canvasSettings = { left, width, height: this.viewport.h };
    this.canvasDOMElement.style.left = `${left}px`;
  }

  private setRenderer() {
    this.renderer.setSize(this.canvasSettings.width, this.viewport.h);
    this.renderer.setPixelRatio(this.viewport.w < 900 && window.devicePixelRatio >= 2 ? 2 : 1);
  }

  private setScenes() {
    this.scenes = scenesSettings.map(
      (sceneSettings, index: number) =>
        new Scene(
          { index, ...sceneSettings },
          this.sceneElementsMeshTemplates,
          this.canvasDOMElement,
          this.canvasSettings,
          this.contentDOMElement,
          this.viewport
        )
    );
  }
  private setBackground() {
    this.background = new Background(this.canvasDOMElement, this.canvasSettings, this.viewport);
  }

  private setAnimate() {
    this.animate = () => {
      this.background.render({ renderer: this.renderer });
      this.renderer.autoClear = false;
      this.renderer.clearDepth();
      this.scenes.forEach((scene: Scene) => scene.render({ renderer: this.renderer }));
      this.renderer.autoClear = true;
    };
  }
}
