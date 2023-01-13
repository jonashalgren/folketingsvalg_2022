import { derived } from "svelte/store";
import { getSceneNumberProperties } from "./getSceneNumberProperties";

export const _sceneNumberProperties = derived([], () => {
  return getSceneNumberProperties({}).numberProperties;
});
