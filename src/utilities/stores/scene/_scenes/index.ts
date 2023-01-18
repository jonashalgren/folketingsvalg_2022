import { derived } from "svelte/store";
import { Scene } from "@classes";
import { sceneData } from "@assets";
import type { S } from "@models";
import { _sceneElementBlocks, _canvasElement, _canvasProperties, _textPosition } from "@stores";

export const _scenes = derived(
  [_canvasElement, _sceneElementBlocks, _canvasProperties, _textPosition],
  ([$_canvasElement, $_sceneElementBlocks, $_canvasProperties, $_textPosition]) => {
    if ($_canvasElement && $_sceneElementBlocks && $_textPosition.length > 0) {
      return sceneData.map(
        (data: S, index: number) =>
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
