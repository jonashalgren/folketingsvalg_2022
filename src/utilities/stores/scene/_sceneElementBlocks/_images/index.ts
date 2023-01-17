import { readable } from "svelte/store";
import { Texture, TextureLoader } from "three";
import type { P_Letter, P_Leader_Mesh, S_E_Block_Image } from "@models";
import { partyCollection } from "@assets";
import { getImages } from "./getImages";

export const _images = readable<S_E_Block_Image[]>([], function start(set) {
  Promise.all(
    Object.values(partyCollection).map((item) => {
      return new Promise((resolve, reject) => {
        new TextureLoader().load(
          item.leader,
          function (data) {
            resolve({
              letter: item.letter,
              texture: data,
              color: item.color,
            });
          },
          function () {
            reject("An error happened loading map");
          }
        );
      });
    })
  ).then((items: { letter: P_Letter; texture: Texture; color: string }[]) => {
    set(getImages({ textures: items }));
  });
});
