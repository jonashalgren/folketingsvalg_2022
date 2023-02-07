import type { C_S_S_Camera, C_S_Settings, C_S_Camera_Mapper } from "@models";
import { setCameraSettings } from "./setCameraSettings";
import { setMapper } from "./setMapper";
import { pipe } from "@helpers";

export type Props = {
  settings: C_S_Settings;
  cameraSettings?: C_S_S_Camera;
  mapper?: (props: C_S_Camera_Mapper) => void;
};

export const getMapperCamera = pipe(setCameraSettings, setMapper);
