import { readable } from "svelte/store";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import type { S_E_Block_Map } from "@models";
import type { SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import Map from "@assets/misc/map/map.svg";
import { getMap } from "./getMap";
import { mapAreaIds } from "@assets";

export const _map = readable<S_E_Block_Map>(undefined, function start(set) {
  new SVGLoader().load(
    Map,
    function (data: SVGResult) {
      set(
        getMap({
          areaPaths: data.paths,
          areaIds: mapAreaIds,
        }).map
      );
    },
    function () {},
    function (error) {
      console.log("An error happened loading map", error);
    }
  );
});
