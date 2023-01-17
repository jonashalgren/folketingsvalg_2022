import { derived } from "svelte/store";
import { getSceneBackground } from "./getSceneBackground";
import { _canvasProperties, _canvasElement, _sceneData } from "@stores";

export const _sceneBackground = derived(
  [_canvasProperties, _canvasElement, _sceneData],
  ([$_canvasProperties, $_canvasElement]) => {
    return $_canvasElement
      ? getSceneBackground({
          canvasProperties: $_canvasProperties,
          canvasElement: $_canvasElement,
        })
      : { render: function () {} };
  }
);
