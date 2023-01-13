import { readable } from "svelte/store";
import { SVGLoader, type SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { P_Logo_Mesh, P_Letter } from "@models";
import { partyCollection } from "@assets";
import { getPartyLogoMesh } from "./getPartyLogoMesh";

export const _partyLogoMesh = readable<P_Logo_Mesh[]>([], function start(set) {
  Promise.all(
    Object.values(partyCollection).map((item) => {
      return new Promise((resolve, reject) => {
        new SVGLoader().load(
          item.logo,
          function (data) {
            resolve({
              letter: item.letter,
              items: data.paths,
            });
          },
          function () {},
          function () {
            reject("An error happened loading map");
          }
        );
      });
    })
  ).then((paths: { letter: P_Letter; items: SVGResultPaths[] }[]) => {
    set(getPartyLogoMesh({ paths }).meshes);
  });
});
