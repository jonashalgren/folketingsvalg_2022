import type { S } from "@models";
import { intro, outro, overview, mandates } from "./misc";
import { sections } from "./sections";

export const sceneData: S[] = [intro, overview, ...sections, mandates, outro];
