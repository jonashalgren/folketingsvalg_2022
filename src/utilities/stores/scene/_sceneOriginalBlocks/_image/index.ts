import { readable } from "svelte/store";
import { Texture, TextureLoader } from "three";
import type { P_Letter, P_Leader_Mesh } from "@models";
import { partyCollection } from "@assets";
import { getPartyLeaderMesh } from "./getPartyLeaderMesh";

export const _image = readable<P_Leader_Mesh[]>([], function start(set) {
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
    set(getPartyLeaderMesh({ textures: items }).leaderMeshes);
  });
});
