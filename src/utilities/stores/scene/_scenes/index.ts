import { derived } from "svelte/store";
import { Scene } from "@classes";
import { scenesSettings } from "@assets";
import type { S_Settings } from "@models";
import { _sceneElementsMeshTemplates, _canvasDOMElement, _canvasSettings, _contentSectionsOffsets } from "@stores";

export const _scenes = derived(
  [_canvasDOMElement, _sceneElementsMeshTemplates, _canvasSettings, _contentSectionsOffsets],
  ([$_canvasDOMElement, $_sceneElementsMeshTemplates, $_canvasSettings, $_contentSectionsOffsets]) => {
    if ($_canvasDOMElement && $_sceneElementsMeshTemplates && $_contentSectionsOffsets.length > 0) {
      return scenesSettings.map(
        (sceneSettings: S_Settings, index: number) =>
          new Scene(
            { index, ...sceneSettings },
            $_sceneElementsMeshTemplates,
            $_canvasDOMElement,
            $_canvasSettings,
            $_contentSectionsOffsets[index]
          )
      );
    }
    return [];
  }
);
