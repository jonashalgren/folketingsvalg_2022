import { writable } from "svelte/store";

export const _canvasElement = writable<undefined | HTMLCanvasElement>(undefined);
