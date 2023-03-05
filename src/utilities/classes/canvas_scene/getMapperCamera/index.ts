import type { C_S_Settings_Camera, C_Scene_Settings, C_Scene_Camera_Mapper } from "@models";
import { setCameraSettings } from "./setCameraSettings";
import { setMapper } from "./setMapper";
import { pipe } from "@helpers";

export type Props = {
  sceneSettings: C_Scene_Settings;
  dimensionZ: number;
  cameraSettings?: C_S_Settings_Camera;
  mapper?: C_Scene_Camera_Mapper;
};

export const getMapperCamera = pipe(setCameraSettings, setMapper);
