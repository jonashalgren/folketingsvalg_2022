import { pipe } from "@helpers";
import type { C_Content_Settings, Viewport } from "@models";
import type { PerspectiveCamera } from "three";
import { setBoundingBox } from "./setBoundingBox";
import { setDimensionZ } from "./setDimensionZ";
import { setProgressSettings } from "./setProgressSettings";

export type Props = {
  contentSettingsList: C_Content_Settings[];
  camera: PerspectiveCamera;
  contentDOMElement: HTMLDivElement;
  viewport: Viewport;
};

export const getProcessedContentSettingsList = pipe(setBoundingBox, setDimensionZ, setProgressSettings);
