import type { Election_Result_Area, S_S_E_Map_Config, S_E_Map_Mesh, S_Settings } from "@models";
import { Scene_Element_Map_Area } from "@classes";

type Props = {
  electionResult: Election_Result_Area[];
  configs: S_S_E_Map_Config[];
  meshes: S_E_Map_Mesh[];
  sceneSettings: S_Settings;
};

export function getAreas({ electionResult, meshes, configs, sceneSettings }: Props) {
  return electionResult.map(
    (area) =>
      new Scene_Element_Map_Area(
        area.id,
        configs,
        meshes.filter((entry) => entry.userData.areaId === area.id),
        sceneSettings
      )
  );
}
