import { writable } from "svelte/store";

export const _canvasDOMElement = writable<undefined | HTMLCanvasElement>(undefined);
 