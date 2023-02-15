import type { C_Content_Settings } from "@models";
import { intro, outro, overview, mandates } from "./misc";
import { sections } from "./sections";

export const canvasScenesSettings: C_Content_Settings[] = [intro, overview, ...sections, mandates, outro];
