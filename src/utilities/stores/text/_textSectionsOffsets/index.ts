import { derived } from "svelte/store";
import { _textElementChildrenOffsets } from "@stores";
import { getTextSectionsOffsets } from "./getTextSectionOffsets";

export const _textSectionsOffsets = derived(
  [_textElementChildrenOffsets],
  ([$_textElementChildrenOffsets]) => {
    return getTextSectionsOffsets({ textElementChildrenOffsets: $_textElementChildrenOffsets });
  }
);
