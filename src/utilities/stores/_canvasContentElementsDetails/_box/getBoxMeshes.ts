import { RepeatWrapping } from "three";
import { Color, Mesh, MeshLambertMaterial, BoxGeometry } from "three";
import type { C_C_E_Mesh_Box } from "@models";
import type { Props } from "./index";

export function getBoxMeshes(items: Props) {
  return items.flatMap((item) => {
    const color = new Color(item.color);
    const material = new MeshLambertMaterial({ color: color });
    const geometry = new BoxGeometry(1, 1);
    let materials = [material, material, material, material, material, material];

    if (item.map) {
      item.map.wrapS = RepeatWrapping;
      item.map.wrapT = RepeatWrapping;
      item.map.repeat.set(1, 1);
      const materialTexture = new MeshLambertMaterial({ map: item.map });
      materials = [material, material, material, material, materialTexture, material];
    }

    const mesh = new Mesh(geometry, materials);

    mesh.scale.z = 0.2;
    mesh.position.z = 0.4;

    mesh.userData.partyLetter = item.partyLetter;
    mesh.userData.texture = item?.texture ?? undefined;

    return mesh as C_C_E_Mesh_Box;
  });
}
