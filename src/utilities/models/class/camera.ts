import type { Motion } from "@models";
import type { PerspectiveCamera } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type S_Camera = {
  positionMain: Motion<[number, number, number]>;
  targetMain: Motion<[number, number, number]>;
  targetEntry: [number, number, number];
  positionEntry: [number, number, number];
  targetExit: [number, number, number];
  positionExit: [number, number, number];
};

export type S_Camera_Mapper = (params: S_Camera_Mapper_Params) => void;

export type S_Camera_Mapper_Params = {
  progressMain: number;
  progressEntry: number;
  progressExit: number;
  controls: OrbitControls;
  camera: PerspectiveCamera;
};
