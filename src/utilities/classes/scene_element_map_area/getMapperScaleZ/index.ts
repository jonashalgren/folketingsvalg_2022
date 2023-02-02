import type { S_S_E_Map_Area_Id, S_S_E_Map_Config } from "@models";
import { getProcessedZ } from "@helpers";
import { interpolate } from "popmotion";

export type Props = {
  areaId: S_S_E_Map_Area_Id;
  configs: S_S_E_Map_Config[];
  dimensionZ: number;
};

export function getMapperScaleZ({ areaId, configs, dimensionZ }: Props) {
  return interpolate(
    configs.flatMap((item) => item.inputRange),
    configs.flatMap((item) => {
      if (item.mapVariant === "party_vote_allocation") {
        const area = item.areasProperties.find((entry) => areaId === entry.areaId);
        const scaleZ = getProcessedZ({ dimensionZ, z: area.pct / 5 });
        return [scaleZ, scaleZ];
      } else if (item.mapVariant === "blank") {
        return [0, 0];
      }
    })
  );
}