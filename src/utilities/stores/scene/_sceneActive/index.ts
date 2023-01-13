import { derived } from "svelte/store";
import { _textSectionsOffsets, _scrollY } from "@stores";
import { getActiveSceneMapper } from "./getActiveSceneMapper";

const _sceneActiveMapper = derived(_textSectionsOffsets, ($_textSectionsOffsets) => {
  return getActiveSceneMapper({ offsets: $_textSectionsOffsets });
});

export const _sceneActive = derived([_sceneActiveMapper, _scrollY], ([$_sceneActiveMapper, $_scrollY]) =>
  $_sceneActiveMapper($_scrollY)
);
