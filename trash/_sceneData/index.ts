import { readable } from "svelte/store";
import { scene, mapAreaIds } from "@assets";
import { getSceneData } from "./getSceneData";
import { election_result } from "@assets";

export const _sceneData = readable(
  getSceneData({
    electionResult: election_result,
    sceneData: scene,
    mapAreaIds,
  }).sceneData
);
