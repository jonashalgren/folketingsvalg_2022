import { Mesh, MeshBasicMaterial, PlaneGeometry, Vector3, WebGLRenderer } from "three";
import { Canvas_Item } from "@classes_abstract";
import type { C_Settings } from "@models";
import { getProcessedZ } from "@helpers";

type Props = {
  renderer: WebGLRenderer;
  canvasDOMElement: HTMLCanvasElement;
  canvasSettings: C_Settings;
};

export class Canvas_Background extends Canvas_Item {
  private plane: Mesh;

  constructor({ renderer, canvasDOMElement, canvasSettings }: Props) {
    super({ renderer, canvasDOMElement, canvasSettings, boundingBox: new Vector3(100, 100, 0) });
    this.setCameraPosition();
    this.setPlane();
    this.addElementMeshesToScene([this.plane]);
  }

  private setPlane() {
    const geometry = new PlaneGeometry(10000, 10000);
    const material = new MeshBasicMaterial({ color: "#e6e6e1" });
    this.plane = new Mesh(geometry, material);
    this.plane.position.set(0, 0, 1);
  }

  private setCameraPosition() {
    this.camera.position.set(0, 0, getProcessedZ({ dimensionZ: this.dimensionZ, z: 200 }));
  }

  resizing() {
    this.setCameraPosition();
  }

  animate() {
    this.render();
  }
}
