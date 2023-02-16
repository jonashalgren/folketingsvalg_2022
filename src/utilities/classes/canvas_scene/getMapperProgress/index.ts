import { _scrollY } from "@stores";
import { pipe } from "@helpers";
import type { C_Scene_Progress, C_Scene_Progress_State, C_Content_Settings, Viewport } from "@models";
import { setMapper } from "./setMapper";
import { setMapperProgressMain } from "./setMapperProgressMain";
import { setMapperProgressAuto } from "./setMapperProgressAuto";
import { setMapperProgressState } from "./setMapperProgressState";
import { setMapperProgressTransition } from "./setMapperProgressTransition";

export type Props = {
  contentDOMElement: HTMLDivElement;
  sceneSettings: C_Content_Settings;
  viewport: Viewport;
  isLastScene: boolean;
  mapperProgressState?: (progress: number) => C_Scene_Progress_State;
  mapperProgressAuto?: () => number;
  mapperProgressMain?: (progress: number) => number;
  mapperProgressEntry?: (progress: number) => number;
  mapperProgressExit?: (progress: number) => number;
  mapper?: () => C_Scene_Progress;
};

export const getMapperProgress = pipe(setMapperProgressState, setMapperProgressTransition, setMapperProgressMain, setMapperProgressAuto, setMapper);
