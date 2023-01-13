import { derived } from "svelte/store";
import { _sceneData } from "@stores";

export const _sceneThree = derived([_sceneData], ([$_sceneData]) => {
  return [];
});
