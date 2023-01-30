import type { Props } from "../index";
import { getMapperPositionCamera } from "./getMapperPositionCamera";
import { getMapperTargetCamera } from "./getMapperTargetCamera";
import type { S_Camera_Mapper_Params } from "@models";

export function setMapper(item: Props): Props {
  const mapperPositionCamera = getMapperPositionCamera({ camera: item.processedCameraData });
  const mapperTargetCamera = getMapperTargetCamera({ camera: item.processedCameraData });

  return {
    ...item,
    mapper: function ({ progress, controls, camera }: S_Camera_Mapper_Params) {
      mapperPositionCamera({ progress, camera });
      mapperTargetCamera({ progress, controls });
    },
  };
}
