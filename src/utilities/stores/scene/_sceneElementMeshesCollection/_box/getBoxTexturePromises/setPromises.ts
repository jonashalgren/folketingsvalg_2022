import { TextureLoader } from "three";
import type { Props, PromiseProps } from "./index";

export function setPromises(item: Props) {
  return {
    ...item,
    promises: <Promise<PromiseProps>[]>item.detailList.map(
      (entry) =>
        new Promise((resolve, reject) => {
          const { color, partyLetter, texture } = entry;
          if (entry.texture) {
            new TextureLoader().load(
              entry.image,
              function (map) {
                resolve({ partyLetter, map, color, texture });
              },
              function () {
                reject("An error happened loading map");
              }
            );
          } else {
            resolve({ partyLetter, color });
          }
        })
    ),
  };
}
