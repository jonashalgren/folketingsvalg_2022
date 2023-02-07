import { _scrollY } from "@stores";
import { pipe } from "@helpers";
import type { S_Progress_Mapper, S_Progress_State, S_Settings, Viewport } from "@models";
import { setMapperProgress } from "./setMapperProgress";
import { setMapperProgressMain } from "./setMapperProgressMain";
import { setMapperProgressAuto } from "./setMapperProgressAuto";
import { setMapperProgressState } from "./setMapperProgressState";
import { setMapperProgressTransition } from "./setMapperProgressTransition";

export type Props = {
  contentDOMElement: HTMLDivElement;
  settings: S_Settings;
  viewport: Viewport;
  mapperProgressState?: (progress: number) => S_Progress_State;
  mapperProgressAuto?: () => number;
  mapperProgressMain?: (progress: number) => number;
  mapperProgressEntry?: (progress: number) => number;
  mapperProgressExit?: (progress: number) => number;
  mapper?: S_Progress_Mapper;
};

export const getMapperProgress = pipe(setMapperProgressState, setMapperProgressTransition, setMapperProgressMain, setMapperProgressAuto, setMapperProgress);
