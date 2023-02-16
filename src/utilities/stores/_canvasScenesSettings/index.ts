import { derived, type Readable } from "svelte/store";
import { canvasScenesSettings } from "@assets";
import type { C_Content_Settings } from "@models";
import { _figure } from "./_figure";
import { _box } from "./_box";
import { _map } from "./_map";
import { _text } from "./_text";

export const _canvasScenesSettings: Readable<C_Content_Settings[]> = derived([_figure, _box, _map, _text], ([$_figure, $_box, $_map, $_text]) => {
  if (($_figure.length > 0, $_box.length > 0, $_map.length > 0, $_text.length > 0)) {
    return canvasScenesSettings;
  } else {
    return [];
  }
});
