import { derived } from "svelte/store";
import type { Readable } from "svelte/store";
import type { S_E_Mesh_Templates } from "@models";
import { _figure } from "./_figure";
import { _box } from "./_box";
import { _map } from "./_map";
import { _text } from "./_text";
import { _transition } from "./_transition";

export const _sceneElementsMeshTemplates: Readable<S_E_Mesh_Templates | undefined> = derived(
  [_figure, _box, _map, _text, _transition],
  ([$_figure, $_box, $_map, $_text, $_transition]) => {
    if ($_figure?.length > 0 && $_box?.length > 0 && $_map?.length > 0 && $_text?.length > 0) {
      return {
        box: $_box,
        figure: $_figure,
        text: $_text,
        map: $_map,
        transition: $_transition,
      };
    }
    return undefined;
  }
);
