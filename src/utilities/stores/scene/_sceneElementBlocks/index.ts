import { derived } from "svelte/store";
import type { Readable } from "svelte/store";

import type { S_E_Blocks } from "@models";
import { _figure } from "./_figure";
import { _images } from "./_images";
import { _logos } from "./_logos";
import { _map } from "./_map";
import { _text } from "./_text";

export const _sceneElementBlocks: Readable<S_E_Blocks | undefined> = derived(
  [_figure, _images, _logos, _map, _text],
  ([$_figure, $_images, $_logos, $_map, $_text]) => {
    if ($_figure && $_images.length > 0 && $_logos.length > 0 && $_map && $_text) {
      return {
        images: $_images,
        logos: $_logos,
        figure: $_figure,
        text: $_text,
        map: $_map,
      };
    }
    return undefined;
  }
);
