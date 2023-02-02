import type { Motion, S_Progress } from "@models";
import type { PerspectiveCamera, Vector3Tuple } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type S_S_Camera = {
  positionMain: Motion<Vector3Tuple>;
  targetMain: Motion<Vector3Tuple>;
  targetEntry: Vector3Tuple;
  positionEntry: Vector3Tuple;
  targetExit: Vector3Tuple;
  positionExit: Vector3Tuple;
};

export type S_Camera_Mapper = (params: S_Camera_Mapper_Params) => void;

export type S_Camera_Mapper_Params = {
  progress: S_Progress;
  controls: OrbitControls;
  camera: PerspectiveCamera;
};
