import type { S_E_Data_Collection, S_E_Mesh_Collection } from "@models";
import { Scene_Element_Box, Scene_Element_Map } from "@classes";

type Props = {
  elementDataCollection: S_E_Data_Collection;
  elementMeshesCollection: S_E_Mesh_Collection;
  dimensionZ: number;
};

export function getElements({ elementDataCollection: data, elementMeshesCollection: meshes, dimensionZ }: Props) {
  return [
    ...(data.boxes?.map((image, index) => new Scene_Element_Box(image, meshes.box, dimensionZ, index)) ?? []),
    ...(data.map ? [new Scene_Element_Map(data.map, meshes.map, dimensionZ)] : []),
  ];
}
