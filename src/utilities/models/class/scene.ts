import type { S_Number_Item, AdditionalScroll, S_Party_Item, S_Text_Item, S_Part, S_Camera } from "@models";

export type S_Contructor = {
  index: number;
  additionalScroll?: AdditionalScroll[];
  isPartyFloating?: Boolean;
  mode?: "auto" | "scroll";
  autoDuration?: number;
  hasLogoIntro?: boolean;
  camera: S_Camera;
  partyLeader?: S_Party_Item[];
  partyLogo?: S_Party_Item[];
  text?: S_Text_Item[];
  number?: S_Number_Item[];
  part?: S_Part[];
};
