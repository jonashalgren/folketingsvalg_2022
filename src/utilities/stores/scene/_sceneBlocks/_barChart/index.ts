import { derived } from "svelte/store";
import { _partyLogoMesh } from "@stores";
import { getSceneOverviewProperties } from "./getSceneOverviewProperties";

export const _sceneOverviewProperties = derived([_partyLogoMesh], ([$_partyLogoMesh]) => {
  return $_partyLogoMesh.length > 0
    ? getSceneOverviewProperties({ partyLogoMesh: $_partyLogoMesh }).overviewProperties
    : undefined;
});
