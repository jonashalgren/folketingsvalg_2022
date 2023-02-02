import { _scrollY } from "@stores";
import { pipe } from "@helpers";
import type { TextPosition, S_Progress_Mapper, S_Progress_State, S_Settings } from "@models";
import { setProgressSettings } from "./setProgressSettings";
import { setMapperProgress } from "./setMapperProgress";
import { setMapperProgressMain } from "./setMapperProgressMain";
import { setMapperProgressAuto } from "./setMapperProgressAuto";
import { setMapperProgressState } from "./setMapperProgressState";
import { setMapperProgressTransition } from "./setMapperProgressTransition";

export type Props = {
  textPosition: TextPosition;
  settings: S_Settings;
  progressSettings?: {
    mainStart: number;
    mainEnd: number;
    entryStart: number;
    exitEnd: number;
  };
  mapperProgressState?: (progress: number) => S_Progress_State;
  mapperProgressAuto?: () => number;
  mapperProgressMain?: (progress: number) => number;
  mapperProgressEntry?: (progress: number) => number;
  mapperProgressExit?: (progress: number) => number;
  mapper?: S_Progress_Mapper;
};

export const getMapperProgress = pipe(
  setProgressSettings,
  setMapperProgressState,
  setMapperProgressTransition,
  setMapperProgressMain,
  setMapperProgressAuto,
  setMapperProgress
);
