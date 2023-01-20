import { derived } from "svelte/store";
import type { Readable } from "svelte/store";
import type { S_E_Meshes_Collection } from "@models";
import { _figure } from "./_figure";
import { _image } from "./_image";
import { _logo } from "./_logo";
import { _map } from "./_map";
import { _text } from "./_text";
import { _transition } from "./_transition";

export const _sceneElementMeshesCollection: Readable<S_E_Meshes_Collection | undefined> = derived(
  [_figure, _image, _logo, _map, _text, _transition],
  ([$_figure, $_image, $_logo, $_map, $_text, $_transition]) => {
    if ($_figure?.length > 0 && $_image?.length > 0 && $_logo?.length > 0 && $_map?.length > 0 && $_text?.length > 0) {
      return {
        image: $_image,
        logo: $_logo,
        figure: $_figure,
        text: $_text,
        map: $_map,
        transition: $_transition,
      };
    }
    return undefined;
  }
);
