import type { C_C_Settings_Camera, C_Content_Settings, C_Content_Camera_Mapper } from "@models";
import { setCameraSettings } from "./setCameraSettings";
import { setMapper } from "./setMapper";
import { pipe } from "@helpers";

export type Props = {
  contentSettings: C_Content_Settings;
  cameraSettings?: C_C_Settings_Camera;
  mapper?: C_Content_Camera_Mapper;
};

export const getMapperCamera = pipe(setCameraSettings, setMapper);