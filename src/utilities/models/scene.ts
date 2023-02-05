import type { PerspectiveCamera } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type S_Camera_Mapper = {
  progress: S_Progress;
  controls: OrbitControls;
  camera: PerspectiveCamera;
};

export type S_Progress_State = "active" | "inactive" | "next";

export type S_Progress = {
  main: number;
  entry: number;
  exit: number;
  auto: number;
  state: S_Progress_State;
};

export type S_Progress_Mapper = () => S_Progress;
