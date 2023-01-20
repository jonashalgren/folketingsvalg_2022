import type { S_E_Data_Collection, S_E_Meshes_Collection } from "@models";
import { Scene_Element_Image, Scene_Element_Map } from "@classes";

type Props = {
  elementDataCollection: S_E_Data_Collection;
  elementMeshesCollection: S_E_Meshes_Collection;
};

export function getElements({ elementDataCollection: data, elementMeshesCollection: meshes }: Props) {
  return [
    ...(data.images?.map((image) => new Scene_Element_Image(image, meshes.image)) ?? []),
    ...(data.map ? [new Scene_Element_Map(data.map, meshes.map)] : []),
  ];
}
