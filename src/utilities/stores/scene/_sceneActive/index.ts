import { derived } from "svelte/store";
import { _textPosition, _scrollY } from "@stores";
import { getActiveSceneMapper } from "./getActiveSceneMapper";

const _sceneActiveMapper = derived(_textPosition, ($_textPosition) => {
  return getActiveSceneMapper({ offsets: $_textPosition });
});

export const _sceneActive = derived([_sceneActiveMapper, _scrollY], ([$_sceneActiveMapper, $_scrollY]) =>
  $_sceneActiveMapper($_scrollY)
);
