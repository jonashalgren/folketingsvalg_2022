import { pipe } from "@helpers";
import { setMeshes } from "./setMeshes";
import { setShapes } from "./setShapes";
import type { P_Letter, P_Logo_Mesh } from "@models";
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
  meshes?: P_Logo_Mesh[];
};

export const getPartyLogoMesh = pipe(setShapes, setMeshes);
