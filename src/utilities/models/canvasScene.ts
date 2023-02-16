import type { Vector3Tuple } from "three";

export type C_Scene_Progress_State = "active" | "inactive" | "next";

export type C_Scene_Progress = {
  main: number;
  entry: number;
  exit: number;
  auto: number;
  state: C_Scene_Progress_State;
};

export type C_Scene_Progress_Mapper = () => C_Scene_Progress;

export type C_Scene_Camera_Mapper = (progress: C_Scene_Progress) => {
  positionMain: Vector3Tuple;
  positionEntry: Vector3Tuple;
  positionExit: Vector3Tuple;
  targetMain: Vector3Tuple;
  targetEntry: Vector3Tuple;
  targetExit: Vector3Tuple;
};

export type C_Scene_Opacity_Mapper = (progress: number) => number;
