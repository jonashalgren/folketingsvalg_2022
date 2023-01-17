import type { S, S_Camera_Mapper_Params } from "@models";
import { getMapperPositionCamera } from "./getMapperPositionCamera";
import { getMapperTargetCamera } from "./getMapperTargetCamera";

type Props = {
  data: S;
};

export function getMapperCamera({ data }: Props) {
  const mapperPositionCamera = getMapperPositionCamera({ data });
  const mapperTargetCamera = getMapperTargetCamera({ data });

  return function ({ progressMain, progressEntry, progressExit, controls, camera }: S_Camera_Mapper_Params) {
    mapperPositionCamera({ progressMain, progressEntry, progressExit, camera });
    mapperTargetCamera({ progressMain, progressEntry, progressExit, controls });
  };
}
