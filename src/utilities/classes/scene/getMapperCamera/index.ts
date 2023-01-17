import type { S, S_Camera_Mapper_Params } from "@models";
import { getMapperPositionCamera } from "./getMapperPositionCamera";
import { getMapperTargetCamera } from "./getMapperTargetCamera";

type Props = {
  data: S;
};

export function getMapperCamera({ data }: Props) {
  const mapperPositionCamera = getMapperPositionCamera({ data });
  const mapperTargetCamera = getMapperTargetCamera({ data });

  return function ({ progress, controls, camera }: S_Camera_Mapper_Params) {
    mapperPositionCamera({ progress, camera });
    mapperTargetCamera({ progress, controls });
  };
}
