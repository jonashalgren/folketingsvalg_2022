import { derived } from "svelte/store";
import { getSceneNumberProperties } from "./getSceneNumberProperties";

export const _number = derived([], () => {
  return getSceneNumberProperties({}).numberProperties;
});
