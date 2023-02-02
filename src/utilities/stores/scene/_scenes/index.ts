import { derived } from "svelte/store";
import { Scene } from "@classes";
import { scenesSettings } from "@assets";
import type { S_Settings } from "@models";
import { _sceneElementMeshTemplates, _canvasElement, _canvasSettings, _textPosition } from "@stores";

export const _scenes = derived(
  [_canvasElement, _sceneElementMeshTemplates, _canvasSettings, _textPosition],
  ([$_canvasElement, $_sceneElementMeshTemplates, $_canvasSettings, $_textPosition]) => {
    if ($_canvasElement && $_sceneElementMeshTemplates && $_textPosition.length > 0) {
      return scenesSettings.map(
        (sceneSettings: S_Settings, index: number) =>
          new Scene(
            { index, ...sceneSettings },
            $_sceneElementMeshTemplates,
            $_canvasElement,
            $_canvasSettings,
            $_textPosition[index]
          )
      );
    }
    return [];
  }
);
