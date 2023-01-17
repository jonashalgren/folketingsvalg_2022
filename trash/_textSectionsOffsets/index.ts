import { derived } from "svelte/store";
import { _textPosition } from "@stores";
import { getTextSectionsOffsets } from "./getTextSectionOffsets";

export const _textSectionsOffsets = derived([_textPosition], ([$_textPosition]) => {
  return getTextSectionsOffsets({ textElementChildrenOffsets: $_textPosition });
});
