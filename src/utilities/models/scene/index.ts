import type { AdditionalScroll, S_Elements, S_Camera } from "@models";

export * from "./progress";
export * from "./elements";
export * from "./three";
export * from "./mappers";
export * from "./elements/text";
export * from "./elements/number";
export * from "./elements/part";

export type S = {
  index?: number;
  bbox?: { x: number; y: number };
  additionalScroll?: AdditionalScroll[];
  camera: S_Camera;
  isPartyFloating?: Boolean;
  mode?: "auto" | "scroll";
  autoDuration?: number;
  hasLogoIntro?: boolean;
  elements: S_Elements;
};
