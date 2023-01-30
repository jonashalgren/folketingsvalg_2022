import type { S, S_Camera_Mapper_Params, S_Camera } from "@models";
import { setProcessedCameraData } from "./setProcessedCameraData";
import { setMapper } from "./setMapper";
import { pipe } from "@helpers";

export type Props = {
  data: S;
  dimensionZ: number;
  processedCameraData?: S_Camera;
  mapper?: ({ progress, controls, camera }: S_Camera_Mapper_Params) => void;
};

export const getMapperCamera = pipe(setProcessedCameraData, setMapper);
