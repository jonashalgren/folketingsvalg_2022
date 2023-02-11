import type { C_Content_Settings, C_C_S_Element_Map_Area_Id, C_C_S_E_Map_Config } from "@models";
import { getProcessedZ } from "@helpers";
import { interpolate } from "popmotion";

export type Props = {
  areaId: C_C_S_Element_Map_Area_Id;
  configs: C_C_S_E_Map_Config[];
  contentSettings: C_Content_Settings;
};

export function getMapperScaleZ({ areaId, configs, contentSettings }: Props) {
  return interpolate(
    configs.flatMap((item) => item.inputRange),
    configs.flatMap((item) => {
      if (item.mapVariant === "party_vote_allocation") {
        const area = item.areasProperties.find((entry) => areaId === entry.areaId);
        const scaleZ = getProcessedZ({ dimensionZ: contentSettings.dimensionZ, z: area.pct / 5 });
        return [scaleZ, scaleZ];
      } else if (item.mapVariant === "blank") {
        return [0, 0];
      }
    })
  );
}
