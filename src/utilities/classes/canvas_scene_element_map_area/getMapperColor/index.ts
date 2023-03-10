import type { C_S_S_Element_Map_Area_Id, C_S_S_Element_Map_Config } from "@models";
import { interpolate } from "popmotion";

export type Props = {
  areaId: C_S_S_Element_Map_Area_Id;
  configs: C_S_S_Element_Map_Config[];
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
