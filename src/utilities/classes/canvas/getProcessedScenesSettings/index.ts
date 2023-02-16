import { pipe } from "@helpers";
import type { C_Scene_Settings, Viewport } from "@models";
import type { PerspectiveCamera } from "three";
import { setBoundingBox } from "./setBoundingBox";
import { setDimensionZ } from "./setDimensionZ";
import { setProgressSettings } from "./setProgressSettings";

export type Props = {
  scenesSettings: C_Scene_Settings[];
  camera: PerspectiveCamera;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export const getProcessedScenesSettings = pipe(setBoundingBox, setDimensionZ, setProgressSettings);
