import type { S_E_Map_Data_Area_Id, S_E_Map_Data_Config } from "@models";
import { interpolate } from "popmotion";

export type Props = {
  areaId: S_E_Map_Data_Area_Id;
  configs: S_E_Map_Data_Config[];
};

export function getMapperColor({ areaId, configs }: Props) {
  return interpolate(
    configs.flatMap((item) => item.inputRange),
    configs.flatMap((item) => {
      if (item.mapVariant === "party_vote_allocation") {
        const area = item.areasProperties.find((entry) => areaId === entry.areaId);
        return [area.color, area.color];
      } else if (item.mapVariant === "blank") {
        return [item.color, item.color];
      }
    })
  );
}
