import type { ElectionResult_Area, S_E_Map_Data_Config, S_E_Map_Mesh } from "@models";
import { Scene_Element_Map_Area } from "@classes";
type Props = {
  electionResult: ElectionResult_Area[];
  configs: S_E_Map_Data_Config[];
  meshes: S_E_Map_Mesh[];
  dimensionZ: number;
};

export function getAreas({ electionResult, meshes, configs, dimensionZ }: Props) {
  return electionResult.map(
    (area) =>
      new Scene_Element_Map_Area(
        area.id,
        configs,
        meshes.filter((entry) => entry.userData.areaId === area.id),
        dimensionZ
      )
  );
}
