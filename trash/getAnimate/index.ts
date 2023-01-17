import type { S_Original_Blocks, S, S_Mappers, CanvasProperties, S_Progress, S_Three_Render } from "@models";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createMappers } from "./createMappers";
import { createAnimate } from "./createAnimate";

import type { Group, Scene, PerspectiveCamera } from "three";
import { pipe } from "@helpers";

export type Props = {
  data: S;
  group: Group;
  scene: Scene;
  camera: PerspectiveCamera;
  controls: OrbitControls;
  sceneProgress: S_Progress;
  canvasProperties: CanvasProperties;
  original_blocks: S_Original_Blocks;
  mappers?: S_Mappers;
  animate?: ({ scrollY }: S_Three_Render) => void;
};

export const getAnimate = pipe(createMappers, createAnimate);
