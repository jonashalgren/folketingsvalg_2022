import { derived } from "svelte/store";
import { getSceneLogo } from "./getSceneLogo";
import { _canvasProperties, _canvasElement, _textSectionsOffsets, _sceneData, _sceneProgress } from "@stores";

export const _sceneLogo = derived(
  [_canvasProperties, _canvasElement, _sceneData, _sceneProgress],
  ([$_canvasProperties, $_canvasElement]) => {
    return $_canvasElement
      ? getSceneLogo({
          canvasProperties: $_canvasProperties,
          canvasElement: $_canvasElement,
        })
      : { render: function () {} };
  }
);
