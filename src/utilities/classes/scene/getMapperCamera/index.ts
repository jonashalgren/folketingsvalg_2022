import type { S_Camera_Mapper_Params, S_S_Camera, S_Settings } from "@models";
import { setCameraSettings } from "./setCameraSettings";
import { setMapper } from "./setMapper";
import { pipe } from "@helpers";

export type Props = {
  settings: S_Settings;
  cameraSettings?: S_S_Camera;
  mapper?: ({ progress, controls, camera }: S_Camera_Mapper_Params) => void;
};

export const getMapperCamera = pipe(setCameraSettings, setMapper);
