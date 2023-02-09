import { derived, type Readable } from "svelte/store";
import type { C_C_Element_Details } from "@models";
import { Canvas_Content_Box, Canvas_Content_Map, Canvas_Content_Transition } from "@classes";
import { _figure } from "./_figure";
import { _box } from "./_box";
import { _map } from "./_map";
import { _text } from "./_text";

export const _canvasContentElementsDetails: Readable<C_C_Element_Details> = derived([_figure, _box, _map, _text], ([$_figure, $_box, $_map, $_text]) => {
  if (($_figure.length > 0, $_box.length > 0, $_map.length > 0, $_text.length > 0)) {
    return {
      box: { class: Canvas_Content_Box, meshes: $_box },
      transition: { class: Canvas_Content_Transition },
      map: { class: Canvas_Content_Map, meshes: $_map },
    };
  } else {
    return;
  }
});
