import { derived } from "svelte/store";
import { Scene } from "@classes";
import { scene } from "@assets";
import { _sceneData, _sceneElementBlocks, _canvasElement, _canvasProperties, _textPosition } from "@stores";

export const _scenes = derived(
  [_canvasElement, _sceneElementBlocks, _canvasProperties, _textPosition],
  ([$_canvasElement, $_sceneElementBlocks, $_canvasProperties, $_textPosition]) => {
    if ($_canvasElement && $_sceneElementBlocks && $_textPosition.length > 0) {
      return scene.map(
        (data, index) =>
          new Scene(
            { index, ...data },
            $_sceneElementBlocks,
            $_canvasElement,
            $_canvasProperties,
            $_textPosition[index]
          )
      );
    }
    return [];
  }
);
