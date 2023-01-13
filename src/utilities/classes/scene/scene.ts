import type { S, S_Originals } from "@models";
import type { WebGLRenderer } from "three";
import { PerspectiveCamera, Scene as ThreeScene } from "three";
import type { Scene_Element_Image } from "@classes";

export type S_Items = {
  image?: Scene_Element_Image[];
  logo?: any[];
  text?: any[];
  number?: any[];
  map?: any;
  lineChart?: any;
  barChart?: any;
  figure?: any;
};

export class Scene {
  render: ({ scrollY, renderer }: { scrollY: number; renderer: WebGLRenderer }) => void;
  items: S_Items;
  scene: ThreeScene;
  camera: PerspectiveCamera;

  constructor(private data: S, private original_blocks: S_Originals) {
    this.render = function () {};
    this.items = {};
    this.camera = new PerspectiveCamera();
    this.scene = new ThreeScene();
  }
}
