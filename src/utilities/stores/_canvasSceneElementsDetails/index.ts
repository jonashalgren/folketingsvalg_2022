import { derived, type Readable } from "svelte/store";
import type { C_S_E_Details } from "@models";
import { Canvas_Scene_Element_Box, Canvas_Scene_Element_Map, Canvas_Scene_Element_Transition } from "@classes";
import { _figure } from "./_figure";
import { _box } from "./_box";
import { _map } from "./_map";
import { _text } from "./_text";

export const _canvasSceneElementsDetails: Readable<C_S_E_Details> = derived([_figure, _box, _map, _text], ([$_figure, $_box, $_map, $_text]) => {
  if (($_figure.length > 0, $_box.length > 0, $_map.length > 0, $_text.length > 0)) {
    return {
      box: { class: Canvas_Scene_Element_Box, meshes: $_box },
      transition: { class: Canvas_Scene_Element_Transition },
      map: { class: Canvas_Scene_Element_Map, meshes: $_map },
    };
  } else {
    return;
  }
});
