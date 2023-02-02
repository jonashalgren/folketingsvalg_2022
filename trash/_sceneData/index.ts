import { readable } from "svelte/store";
import { scene, mapAreaIds, election_result_areas } from "@assets";
import { getSceneData } from "./getSceneData";

export const _sceneData = readable(
  getSceneData({
    electionResult: election_result_areas,
    sceneData: scene,
    mapAreaIds,
  }).sceneData
);
