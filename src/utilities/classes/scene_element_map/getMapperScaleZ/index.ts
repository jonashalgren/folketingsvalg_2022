import { pipe } from "@helpers";
import type { ElectionResult_Area, S_E_Map_Data, S_E_Map_Mesh, Motion, S_E_Map_Data_Area_Id } from "@models";

export type Props = {
  data: S_E_Map_Data;
  meshes: S_E_Map_Mesh[];
  areaIds: S_E_Map_Data_Area_Id[];
  electionResult: ElectionResult_Area[];
  motions?: Motion<number>;
  mapper?: ((progress: number) => number)[];
};

export const getMapperScaleZ = pipe();
