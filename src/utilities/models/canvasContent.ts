import type { PerspectiveCamera } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type C_Content_Camera_Mapper = (props: { progress: C_Content_Progress; controls: OrbitControls; camera: PerspectiveCamera }) => void;

export type C_Content_Progress_State = "active" | "inactive" | "next";

export type C_Content_Progress = {
  main: number;
  entry: number;
  exit: number;
  auto: number;
  state: C_Content_Progress_State;
};

export type C_Content_Progress_Mapper = () => C_Content_Progress;
