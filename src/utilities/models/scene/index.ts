import type { AdditionalScroll, S_Camera, S_E_Data_Collection } from "@models";

export * from "./element";

export type S = {
  index?: number;
  bbox?: { x: number; y: number };
  outputOffsetZ?: number;
  additionalScroll?: AdditionalScroll[];
  camera: S_Camera;
  isPartyFloating?: Boolean;
  mode?: "auto" | "scroll";
  autoDuration?: number;
  hasLogoIntro?: boolean;
  elements: S_E_Data_Collection;
};
