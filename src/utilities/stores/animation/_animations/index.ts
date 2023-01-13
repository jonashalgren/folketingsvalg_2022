import { writable } from "svelte/store";

export const _animations = writable<{ stop: () => void }[]>([]);
