import type { S_Progress } from "@models";
import type { PerspectiveCamera } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type S_Camera_Mapper = {
  progress: S_Progress;
  controls: OrbitControls;
  camera: PerspectiveCamera;
};
