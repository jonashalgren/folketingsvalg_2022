import type { Motion } from "@models";
import type { Vector3Tuple } from "three";

export type S_S_Camera = {
  positionMain: Motion<Vector3Tuple>;
  targetMain: Motion<Vector3Tuple>;
  targetEntry: Vector3Tuple;
  positionEntry: Vector3Tuple;
  targetExit: Vector3Tuple;
  positionExit: Vector3Tuple;
};
