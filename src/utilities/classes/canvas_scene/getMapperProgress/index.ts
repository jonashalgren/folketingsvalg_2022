import { _scrollY } from "@stores";
import { pipe } from "@helpers";
import type { C_Scene_Progress, C_Scene_Progress_State, C_Scene_Settings, Viewport, C_Scene_Progress_Settings } from "@models";
import { setMapper } from "./setMapper";
import { setMapperProgressMain } from "./setMapperProgressMain";
import { setMapperProgressAuto } from "./setMapperProgressAuto";
import { setMapperProgressState } from "./setMapperProgressState";
import { setMapperProgressTransition } from "./setMapperProgressTransition";
import { setSettings } from "./setSettings";

export type Props = {
  sceneIndex: number;
  contentDOMElement: HTMLDivElement;
  sceneSettings: C_Scene_Settings;
  viewport: Viewport;
  isLastScene: boolean;
  settings?: C_Scene_Progress_Settings;
  mapperProgressState?: (progress: number) => C_Scene_Progress_State;
  mapperProgressAuto?: () => number;
  mapperProgressMain?: (progress: number) => number;
  mapperProgressEntry?: (progress: number) => number;
  mapperProgressExit?: (progress: number) => number;
  mapper?: () => C_Scene_Progress;
};

export const getMapperProgress = pipe(
  setSettings,
  setMapperProgressState,
  setMapperProgressTransition,
  setMapperProgressMain,
  setMapperProgressAuto,
  setMapper
);
