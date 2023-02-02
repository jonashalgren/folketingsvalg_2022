import { pipe } from "@helpers";
import type { S_Settings } from "@models";
import type { PerspectiveCamera } from "three";
import { setBoundingBox } from "./setBoundingBox";
import { setDimensionZ } from "./setDimensionZ";

export type Props = {
  settings: S_Settings;
  camera: PerspectiveCamera;
};

export const getProcessedSettings = pipe(setBoundingBox, setDimensionZ);
