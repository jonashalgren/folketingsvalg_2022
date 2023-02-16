import type { C_Scene_Settings, C_S_S_Element_Map_Area_Id, C_S_S_Element_Map_Config } from "@models";
import { getProcessedZ } from "@helpers";
import { interpolate } from "popmotion";

export type Props = {
  areaId: C_S_S_Element_Map_Area_Id;
  configs: C_S_S_Element_Map_Config[];
  sceneSettings: C_Scene_Settings;
};

export function getMapperScaleZ({ areaId, configs, sceneSettings }: Props) {
  return interpolate(
    configs.flatMap((item) => item.inputRange),
    configs.flatMap((item) => {
      if (item.mapVariant === "party_vote_allocation") {
        const area = item.areasProperties.find((entry) => areaId === entry.areaId);
        const scaleZ = getProcessedZ({ dimensionZ: sceneSettings.dimensionZ, z: area.pct / 5 });
        return [scaleZ, scaleZ];
      } else if (item.mapVariant === "blank") {
        return [0, 0];
      }
    })
  );
}
