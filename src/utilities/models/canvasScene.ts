import type { PerspectiveCamera } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type C_S_Camera_Mapper = {
  progress: C_S_Progress;
  controls: OrbitControls;
  camera: PerspectiveCamera;
};

export type C_S_Progress_State = "active" | "inactive" | "next";

export type C_S_Progress = {
  main: number;
  entry: number;
  exit: number;
  auto: number;
  state: C_S_Progress_State;
};
