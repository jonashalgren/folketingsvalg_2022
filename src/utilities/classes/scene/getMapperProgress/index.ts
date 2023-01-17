import { _scrollY } from "@stores";
import { _sceneActive } from "@stores";
import { interpolate } from "popmotion";
import { pipe } from "@helpers";
import type { TextPosition, S_Progress_Mapper, S_Progress_State } from "@models";

type Props = {
  textPosition: TextPosition;
  progressPoints?: {
    mainStart: number;
    mainEnd: number;
    entryStart: number;
    exitEnd: number;
  };
  mapper?: S_Progress_Mapper;
};

export const getMapperProgress = pipe(setProgressPoints, setMapperProgress);

function setProgressPoints(item: Props): Props {
  const { bottom, lastEnd, nextTop, top } = item.textPosition;
  return {
    ...item,
    progressPoints: {
      mainStart: top,
      mainEnd: bottom,
      entryStart: top === 0 ? top : Math.round(lastEnd),
      exitEnd: Math.round((bottom + nextTop) / 2),
    },
  };
}

function setMapperProgress(item: Props): Props {
  const { entryStart, exitEnd, mainEnd, mainStart } = item.progressPoints;

  const mapperProgressMain = interpolate([mainStart, mainEnd], [0, 1]);
  const mapperProgressEntry = interpolate([entryStart, mainStart], [0, 1]);
  const mapperProgressExit = interpolate([mainEnd, exitEnd], [0, 1]);
  const mapperProgressState = interpolate<S_Progress_State>(
    [-1, entryStart, entryStart, mainStart, mainStart, exitEnd, exitEnd, Infinity],
    ["inactive", "inactive", "next", "next", "active", "active", "inactive", "inactive"]
  );

  let main = mapperProgressMain(window.scrollY);
  let entry = mapperProgressEntry(window.scrollY);
  let exit = mapperProgressExit(window.scrollY);

  return {
    ...item,
    mapper: function ({ scrollY }: { scrollY: number }) {
      const state = mapperProgressState(scrollY);

      if (state === "active" || state === "next") {
        main = mapperProgressMain(scrollY);
        entry = mapperProgressEntry(scrollY);
        exit = mapperProgressExit(scrollY);
      }

      return { main, entry, exit, state };
    },
  };
}
