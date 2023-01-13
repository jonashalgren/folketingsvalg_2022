import type { S } from "@models";
import { intro, outro, overview, mandates } from "./misc";
import { sections } from "./sections";

export const scene: S[] = [intro, overview, ...sections, mandates, outro];
