import type { Props } from "../index";
import { getMapperPositionCamera } from "./getMapperPositionCamera";
import { getMapperTargetCamera } from "./getMapperTargetCamera";

export function setMapper(item: Props): Props {
  const { cameraSettings } = item;
  const mapperPositionCamera = getMapperPositionCamera({ cameraSettings });
  const mapperTargetCamera = getMapperTargetCamera({ cameraSettings });

  return {
    ...item,
    mapper: function ({ progress, controls, camera }) {
      mapperPositionCamera({ progress, camera });
      mapperTargetCamera({ progress, controls });
    },
  };
}
