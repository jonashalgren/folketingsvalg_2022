import type { S_E_Data, S_E_Mesh_Collection } from "@models";
import { Scene_Element_Box, Scene_Element_Map } from "@classes";

type Props = {
  elementData: S_E_Data[];
  elementMeshCollection: S_E_Mesh_Collection;
  dimensionZ: number;
};

export function getElements({ elementData, elementMeshCollection, dimensionZ }: Props) {
  return elementData
    .map((item, index) => {
      switch (item.type) {
        case "box":
          return new Scene_Element_Box(item, elementMeshCollection.box, dimensionZ, index);
        case "map":
          return new Scene_Element_Map(item, elementMeshCollection.map, dimensionZ);
        default:
          return;
      }
    })
    .filter((item) => item);
}
