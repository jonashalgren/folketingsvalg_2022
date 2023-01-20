import { pipe } from "@helpers";
import { setMeshes } from "./setMeshes";
import { setShapes } from "./setShapes";
import type { P_Letter, S_E_Logo_Meshes } from "@models";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { Shape, Color } from "three";

export type Props = {
  paths: {
    items: SVGResultPaths[];
    partyLetter: P_Letter;
  }[];
  shapes?: {
    shapeLetter: Shape;
    shapeBg: Shape;
    color: Color;
    letter: P_Letter;
  }[];
  meshes?: S_E_Logo_Meshes;
};

export const getLogoMeshes = pipe(setShapes, setMeshes);
