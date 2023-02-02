import type { S_Settings } from "@models";
import { intro, outro, overview, mandates } from "./misc";
import { sections } from "./sections";

export const scenesSettings: S_Settings[] = [intro, overview, ...sections, mandates, outro];
