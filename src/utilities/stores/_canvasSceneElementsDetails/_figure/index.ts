import { readable } from "svelte/store";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import Mand from "@assets/images/mand_ikon.svg";
import type { C_S_E_M_Figure } from "@models";
import { getFigureMeshes } from "./getFigureMeshes";

export const _figure = readable<C_S_E_M_Figure[]>([], function start(set) {
  new SVGLoader().load(
    Mand,
    function (data) {
      set(getFigureMeshes({ data }));
    },
    function () {},
    function (error) {
      console.log("An error happened loading map", error);
    }
  );
});
