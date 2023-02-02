import type { Motion, S_S_Element } from "@models";
import type { Vector3Tuple } from "three";

export * from "./element";
export * from "./camera";

export type S_S_Camera = {
  positionMain: Motion<Vector3Tuple>;
  targetMain: Motion<Vector3Tuple>;
  targetEntry: Vector3Tuple;
  positionEntry: Vector3Tuple;
  targetExit: Vector3Tuple;
  positionExit: Vector3Tuple;
};

export type S_S_Bounding_Box = { x: number; y: number };
export type S_S_Mode = "auto" | "scroll";
export type S_S_ExtraTextMargin = { index: number; top: number; bottom: number };

export type S_Settings = {
  camera: S_S_Camera;
  elements: S_S_Element[];
  index?: number;
  boundingBox?: S_S_Bounding_Box;
  dimensionZ?: number;
  extraTextMargin?: S_S_ExtraTextMargin[];
  mode?: S_S_Mode;
  autoDuration?: number;
  hasLogoIntro?: boolean;
};
