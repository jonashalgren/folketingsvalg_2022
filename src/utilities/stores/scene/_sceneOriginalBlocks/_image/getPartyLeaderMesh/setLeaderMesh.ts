import type { Props } from "./index";
import * as THREE from "three";
import { Color, Mesh, MeshBasicMaterial, BoxGeometry, Group } from "three";

export function setLeaderMesh(item: Props): Props {
  return {
    ...item,
    leaderMeshes: item.textures.map((entry) => {
      const color = new Color(entry.color);

      entry.texture.wrapS = THREE.RepeatWrapping;
      entry.texture.wrapT = THREE.RepeatWrapping;
      entry.texture.repeat.set(1, 1);

      const materialTexture = new MeshBasicMaterial({ map: entry.texture });
      const material = new MeshBasicMaterial({ color: color });

      const materials = [material, material, material, material, materialTexture, material];

      const geometry = new BoxGeometry(1, 1);

      const mesh = new Mesh(geometry, materials);
      mesh.up.set(0, 0, 1);
      mesh.scale.z = 0.2;
      mesh.position.z = 0.4;

      const group = new Group();

      group.add(mesh);

      return {
        letter: entry.letter,
        color,
        group,
      };
    }),
  };
}
