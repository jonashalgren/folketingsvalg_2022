import { derived, type Readable } from "svelte/store";
import { canvasScenesSettings } from "@assets";
import { Canvas_Scene_Element_Box, Canvas_Scene_Element_Map, Canvas_Scene_Element_Transition } from "@classes";
import { type C_Content_Settings, C_C_Element_Type } from "@models";
import { _figure } from "./_figure";
import { _box } from "./_box";
import { _map } from "./_map";
import { _text } from "./_text";

export const _canvasScenesSettings: Readable<C_Content_Settings[]> = derived([_figure, _box, _map, _text], ([$_figure, $_box, $_map, $_text]) => {
  if (($_figure.length > 0, $_box.length > 0, $_map.length > 0, $_text.length > 0)) {
    return canvasScenesSettings.map((sceneSettings) => ({
      ...sceneSettings,
      elements: sceneSettings.elements.map((element) => {
        if (element.type === C_C_Element_Type.box) {
          return {
            ...element,
            templateMeshes: $_box,
            class: Canvas_Scene_Element_Box,
          };
        } else if (element.type === C_C_Element_Type.map) {
          return {
            ...element,
            templateMeshes: $_map,
            class: Canvas_Scene_Element_Map,
          };
        } else if (element.type === C_C_Element_Type.transition) {
          return {
            ...element,
            class: Canvas_Scene_Element_Transition,
          };
        }

        return element;
      }),
    }));
  } else {
    return undefined;
  }
});
