import { writable } from "svelte/store";

export const _contentDOMElement = writable<HTMLDivElement | undefined>(undefined);
