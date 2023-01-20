import { readable } from "svelte/store";
import { SVGLoader, type SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { P_Letter, S_E_Logo_Meshes } from "@models";
import { partyCollection } from "@assets";
import { getLogoMeshes } from "./getLogoMeshes";

export const _logo = readable<S_E_Logo_Meshes>([], function start(set) {
  Promise.all(
    Object.values(partyCollection).map((item) => {
      return new Promise((resolve, reject) => {
        new SVGLoader().load(
          item.logo,
          function (data) {
            resolve({
              partyLetter: item.partyLetter,
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
  ).then((paths: { partyLetter: P_Letter; items: SVGResultPaths[] }[]) => {
    set(getLogoMeshes({ paths }).meshes);
  });
});
