import type { AdditionalScroll, S_Camera, S_E_Data_Collection } from "@models";

export * from "./element";

export type S_Bounding_Box = { x: number; y: number };

export type S = {
  index?: number;
  boundingBox?: S_Bounding_Box;
  dimensionZ?: number;
  additionalScroll?: AdditionalScroll[];
  camera: S_Camera;
  mode?: "auto" | "scroll";
  autoDuration?: number;
  hasLogoIntro?: boolean;
  elements: S_E_Data_Collection;
};
