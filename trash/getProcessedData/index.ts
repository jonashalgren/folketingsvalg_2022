import { pipe } from "@helpers";
import type { S } from "@models";
import type { PerspectiveCamera } from "three";
import { setBoundingBox } from "./setBoundingBox";
import { setSceneDimensionZ } from "./setSceneDimensionZ";
import { setCamera } from "./setCamera";
import { setElements } from "./setElements";

export type Props = {
  data: S;
  camera: PerspectiveCamera;
};

export const getProcessedData = pipe(setBoundingBox, setSceneDimensionZ, setCamera, setElements);
