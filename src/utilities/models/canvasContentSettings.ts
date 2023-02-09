import type { Motion, C_S_S_Element } from "@models";
import type { Vector3Tuple } from "three";

export type C_C_Settings_Camera = {
  positionMain: Motion<Vector3Tuple>;
  targetMain: Motion<Vector3Tuple>;
  targetEntry: Vector3Tuple;
  positionEntry: Vector3Tuple;
  targetExit: Vector3Tuple;
  positionExit: Vector3Tuple;
};

export type C_C_Settings_Bounding_Box = { x: number; y: number };
export type C_C_Settings_Mode = "auto" | "scroll";
export type C_C_Settings_Extra_Text_Margin = { index: number; top: number; bottom: number };
export type C_C_Settings_Progress_Settings = {
  mainStart: number;
  mainEnd: number;
  entryStart: number;
  exitEnd: number;
};

export type C_Content_Settings = {
  camera: C_C_Settings_Camera;
  elements: C_S_S_Element[];
  hasTransition?: boolean;
  boundingBox?: C_C_Settings_Bounding_Box;
  dimensionZ?: number;
  progressSettings?: C_C_Settings_Progress_Settings;
  extraTextMargin?: C_C_Settings_Extra_Text_Margin[];
  mode?: C_C_Settings_Mode;
  autoDuration?: number;
};
