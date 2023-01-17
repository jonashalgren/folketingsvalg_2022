import { pipe } from "@helpers";
import { setMeshes } from "./setMeshes";
import { setShapes } from "./setShapes";
import type { P_Letter, S_E_Block_Logo } from "@models";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { Shape, Color } from "three";

export type Props = {
  paths: {
    items: SVGResultPaths[];
    letter: P_Letter;
  }[];
  shapes?: {
    shapeLetter: Shape;
    shapeBg: Shape;
    color: Color;
    letter: P_Letter;
  }[];
  logos?: S_E_Block_Logo[];
};

export const getLogos = pipe(setShapes, setMeshes);
