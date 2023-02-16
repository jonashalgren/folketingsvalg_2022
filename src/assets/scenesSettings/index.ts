import type { C_Scene_Settings } from "@models";
import { intro, outro, overview, mandates } from "./misc";
import { sections } from "./sections";

export const scenesSettings: C_Scene_Settings[] = [intro, overview, ...sections, mandates, outro];
