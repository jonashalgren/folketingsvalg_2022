import { readable } from "svelte/store";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import type { SVGResultPaths } from "three/examples/jsm/loaders/SVGLoader";
import Map from "@assets/misc/map/map.svg";

export const _mapAreaPaths = readable<SVGResultPaths[]>([], function start(set) {
  new SVGLoader().load(
    Map,
    function (data) {
      set(data.paths);
    },
    function () {},
    function (error) {
      console.log("An error happened loading map", error);
    }
  );
});
