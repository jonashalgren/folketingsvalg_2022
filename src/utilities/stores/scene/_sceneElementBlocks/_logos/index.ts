import { readable } from "svelte/store";
import { SVGLoader, type SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import type { P_Logo_Mesh, P_Letter, S_E_Block_Logo } from "@models";
import { partyCollection } from "@assets";
import { getLogos } from "./getLogos";

export const _logos = readable<S_E_Block_Logo[]>([], function start(set) {
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
    set(getLogos({ paths }).logos);
  });
});
