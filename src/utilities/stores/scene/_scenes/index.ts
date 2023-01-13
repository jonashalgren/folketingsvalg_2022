import { derived } from "svelte/store";
import { Scene } from "@classes";
import { _sceneData, _sceneOriginalBlocks, _canvasElement, _canvasProperties, _sceneProgress } from "@stores";

export const _scenes = derived(
  [_sceneData, _canvasElement, _sceneOriginalBlocks, _canvasProperties, _sceneProgress],
  ([$_sceneData, $_canvasElement, $_sceneOriginalBlocks, $_canvasProperties, $_sceneProgress]) => {
    if ($_sceneData.length > 0 && $_canvasElement && $_sceneOriginalBlocks && $_sceneProgress.length > 0) {
      return $_sceneData.map(
        (data, index) =>
          new Scene(data, $_sceneOriginalBlocks, $_canvasElement, $_canvasProperties, $_sceneProgress[index])
      );
    }
    return [];
  }
);
