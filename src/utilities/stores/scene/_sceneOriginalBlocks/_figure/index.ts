import { readable } from "svelte/store";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import Mand from "@assets/misc/images/mand_ikon.svg";
import { Color, Group } from "three";
import { threeProperties } from "@assets";
import { getMeshGeometry, getMeshMaterial, getMesh } from "@helpers";

export const _figure = readable<Group>(undefined, function start(set) {
  new SVGLoader().load(
    Mand,
    function (data) {
      const group = new Group();

      const meshes = data.paths.flatMap((path) => {
        return SVGLoader.createShapes(path).map((shape) => {
          const geometry = getMeshGeometry({ shape: shape, bevelOffset: 0, curveSegments: 10 });
          const material = getMeshMaterial({ color: new Color(threeProperties.color_dark) });
          const mesh = getMesh({ geometry, material });
          material.transparent = true;
          mesh.scale.set(5, 5, 0.1);
          mesh.userData.isFaded = false;
          return mesh;
        });
      });
      group.userData.isFaded = false;
      group.add(...meshes);
      set(group);
    },
    function () {},
    function (error) {
      console.log("An error happened loading map", error);
    }
  );
});
