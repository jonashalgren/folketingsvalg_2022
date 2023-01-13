import { derived } from "svelte/store";
import type { Readable } from "svelte/store";
import { _partyLogoMesh } from "@stores";
import type { S_Line_Properties } from "@models";
import { getSceneOverviewProperties } from "./getSceneOverviewProperties";

export const _lineChart: Readable<S_Line_Properties> = derived([_partyLogoMesh], ([$_partyLogoMesh]) => {
  return $_partyLogoMesh.length > 0
    ? getSceneOverviewProperties({ partyLogoMesh: $_partyLogoMesh }).overviewProperties
    : undefined;
});
