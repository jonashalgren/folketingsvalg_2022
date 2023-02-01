import { derived } from "svelte/store";
import { Scene } from "@classes";
import { sceneData } from "@assets";
import type { S } from "@models";
import { _sceneElementMeshCollection, _canvasElement, _canvasProperties, _textPosition } from "@stores";

export const _scenes = derived(
  [_canvasElement, _sceneElementMeshCollection, _canvasProperties, _textPosition],
  ([$_canvasElement, $_sceneElementMeshCollection, $_canvasProperties, $_textPosition]) => {
    if ($_canvasElement && $_sceneElementMeshCollection && $_textPosition.length > 0) {
      return sceneData.map(
        (data: S, index: number) =>
          new Scene(
            { index, ...data },
            $_sceneElementMeshCollection,
            $_canvasElement,
            $_canvasProperties,
            $_textPosition[index]
          )
      );
    }
    return [];
  }
);
