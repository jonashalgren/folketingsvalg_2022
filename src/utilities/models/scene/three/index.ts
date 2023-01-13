import type { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export type S_Three_Render = {
  scrollY: number;
};

export type S_Three = {
  render: (val: S_Three_Render) => void;
  scene: Scene;
  camera: PerspectiveCamera;
};
