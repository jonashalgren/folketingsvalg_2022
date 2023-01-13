import { derived } from "svelte/store";
import { getSceneThree } from "./getSceneThree";
import {
  _sceneData,
  _sceneMapProperties,
  _sceneOverviewProperties,
  _sceneNumberProperties,
  _canvasProperties,
  _canvasElement,
  _sceneProgress,
  _partyLogoMesh,
  _partyLeaderMesh,
  _scenePartProperties,
  _preloadFont,
} from "@stores";

export const _sceneThree = derived(
  [
    _sceneData,
    _canvasProperties,
    _canvasElement,
    _sceneMapProperties,
    _sceneOverviewProperties,
    _sceneProgress,
    _sceneNumberProperties,
    _partyLogoMesh,
    _partyLeaderMesh,
    _scenePartProperties,
    _preloadFont,
  ],
  ([
    $_sceneData,
    $_canvasProperties,
    $_canvasElement,
    $_sceneMapProperties,
    $_sceneOverviewProperties,
    $_sceneProgress,
    $_sceneNumberProperties,
    $_partyLogoMesh,
    $_partyLeaderMesh,
    $_scenePartProperties,
    $_preloadFont,
  ]) => {
    if (
      $_sceneData.length > 0 &&
      $_sceneProgress.length > 0 &&
      $_sceneMapProperties &&
      $_sceneOverviewProperties &&
      $_canvasElement &&
      $_partyLogoMesh.length > 0 &&
      $_partyLeaderMesh.length > 0 &&
      $_scenePartProperties &&
      $_preloadFont
    ) {
      return getSceneThree({
        sceneData: $_sceneData,
        sceneProgress: $_sceneProgress,
        canvasProperties: $_canvasProperties,
        canvasElement: $_canvasElement,
        mapProperties: $_sceneMapProperties,
        overviewProperties: $_sceneOverviewProperties,
        numberProperties: $_sceneNumberProperties,
        partyLogoMesh: $_partyLogoMesh,
        partyLeaderMesh: $_partyLeaderMesh,
        partProperties: $_scenePartProperties,
      });
    }
    return [];
  }
);
