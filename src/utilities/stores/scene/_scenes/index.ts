import { derived } from "svelte/store";
import { Scene } from "@classes";

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

export const _scenes = derived(
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
      return $_sceneData.map((data) => new Scene(data));
    }
    return [];
  }
);
