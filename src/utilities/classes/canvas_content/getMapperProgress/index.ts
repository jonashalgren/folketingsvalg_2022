import { _scrollY } from "@stores";
import { pipe } from "@helpers";
import type { C_S_Progress, C_S_Progress_State, C_S_Settings, Viewport } from "@models";
import { setMapperProgress } from "./setMapperProgress";
import { setMapperProgressMain } from "./setMapperProgressMain";
import { setMapperProgressAuto } from "./setMapperProgressAuto";
import { setMapperProgressState } from "./setMapperProgressState";
import { setMapperProgressTransition } from "./setMapperProgressTransition";

export type Props = {
  contentDOMElement: HTMLDivElement;
  sceneSettings: C_S_Settings;
  viewport: Viewport;
  mapperProgressState?: (progress: number) => C_S_Progress_State;
  mapperProgressAuto?: () => number;
  mapperProgressMain?: (progress: number) => number;
  mapperProgressEntry?: (progress: number) => number;
  mapperProgressExit?: (progress: number) => number;
  mapper?: () => C_S_Progress;
};

export const getMapperProgress = pipe(setMapperProgressState, setMapperProgressTransition, setMapperProgressMain, setMapperProgressAuto, setMapperProgress);
