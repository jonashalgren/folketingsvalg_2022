import { derived } from "svelte/store";
import { _scrollY } from "@stores";
import { _textSectionsOffsets, _sceneActive } from "@stores";
import { interpolate } from "popmotion";
import type { S_Progress } from "@models";

export const _sceneProgress = derived(_textSectionsOffsets, ($_textSectionsOffsets): S_Progress[] => {
  return $_textSectionsOffsets.map(({ textIntro, textOutro, entryStart, exitEnd }) => {
    return {
      main: interpolate([textIntro, textOutro], [0, 1]),
      entry: interpolate([entryStart, textIntro], [0, 1]),
      exit: interpolate([textOutro, exitEnd], [0, 1]),
    };
  });
});
