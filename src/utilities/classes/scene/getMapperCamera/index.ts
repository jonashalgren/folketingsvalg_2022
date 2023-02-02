import type { S_S_Camera, S_Settings, S_Camera_Mapper } from "@models";
import { setCameraSettings } from "./setCameraSettings";
import { setMapper } from "./setMapper";
import { pipe } from "@helpers";

export type Props = {
  settings: S_Settings;
  cameraSettings?: S_S_Camera;
  mapper?: (props: S_Camera_Mapper) => void;
};

export const getMapperCamera = pipe(setCameraSettings, setMapper);
