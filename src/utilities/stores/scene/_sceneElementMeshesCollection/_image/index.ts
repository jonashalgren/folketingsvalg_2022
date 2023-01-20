import { readable } from "svelte/store";
import { Texture, TextureLoader } from "three";
import type { P_Letter, S_E_Image_Meshes } from "@models";
import { partyCollection } from "@assets";
import { getImageMeshes } from "./getImageMeshes";

export const _image = readable<S_E_Image_Meshes>([], function start(set) {
  Promise.all(
    Object.values(partyCollection).map((item) => {
      return new Promise((resolve, reject) => {
        new TextureLoader().load(
          item.leader,
          function (data) {
            resolve({
              partyLetter: item.partyLetter,
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
  ).then((items: { partyLetter: P_Letter; texture: Texture; color: string }[]) => {
    set(getImageMeshes(items));
  });
});
