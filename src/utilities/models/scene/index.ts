import type { S_S_Camera, S_S_Element } from "@models";

export * from "./element";
export * from "./camera";
export * from "./progress";

export type S_S_Bounding_Box = { x: number; y: number };
export type S_S_Mode = "auto" | "scroll";
export type S_S_AdditionalScroll = [number, number, number];

export type S_Settings = {
  camera: S_S_Camera;
  elements: S_S_Element[];
  index?: number;
  boundingBox?: S_S_Bounding_Box;
  dimensionZ?: number;
  additionalScroll?: S_S_AdditionalScroll[];
  mode?: S_S_Mode;
  autoDuration?: number;
  hasLogoIntro?: boolean;
};
