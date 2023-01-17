import type { S_E_Data, S_E_Blocks } from "@models";
import { Scene_Element_Image, Scene_Element_Map } from "@classes";

type Props = {
  elementData: S_E_Data;
  elementBlocks: S_E_Blocks;
};

export function getElements({ elementData, elementBlocks }: Props) {
  const { images, map } = elementData;
  return [
    ...(images?.map((image) => new Scene_Element_Image(image, elementBlocks.images)) ?? []),
    ...(map ? [new Scene_Element_Map(map, elementBlocks.map)] : []),
  ];
}
