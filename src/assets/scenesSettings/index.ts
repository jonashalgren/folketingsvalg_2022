import type { C_S_Settings } from "@models";
import { intro, outro, overview, mandates } from "./misc";
import { sections } from "./sections";

export const scenesSettings: C_S_Settings[] = [intro, overview, ...sections, mandates, outro];
