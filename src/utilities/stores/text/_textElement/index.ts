import { writable } from "svelte/store";

export const _textElement = writable<HTMLDivElement | undefined>(undefined);
