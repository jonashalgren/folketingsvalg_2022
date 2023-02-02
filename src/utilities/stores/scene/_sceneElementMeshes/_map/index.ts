import { readable } from "svelte/store";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import type { S_E_Map_Mesh } from "@models";
import type { SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import Map from "@assets/images/map.svg";
import { getMapMeshes } from "./getMapMeshes";
import { mapAreaIds } from "./mapAreaIds";

export const _map = readable<S_E_Map_Mesh[]>(undefined, function start(set) {
  new SVGLoader().load(
    Map,
    function (data: SVGResult) {
      set(
        getMapMeshes({
          areaPaths: data.paths,
          areaIds: mapAreaIds,
        }).meshes
      );
    },
    function () {},
    function (error) {
      console.log("An error happened loading map", error);
    }
  );
});
