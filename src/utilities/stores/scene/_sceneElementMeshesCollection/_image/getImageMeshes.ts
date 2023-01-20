import type { P_Letter } from "@models";
import { Texture, RepeatWrapping } from "three";
import { Color, Mesh, MeshBasicMaterial, BoxGeometry } from "three";

export type Props = { partyLetter: P_Letter; color: string; texture: Texture }[];

export function getImageMeshes(items: Props) {
  return items.flatMap((item) => {
    const color = new Color(item.color);

    item.texture.wrapS = RepeatWrapping;
    item.texture.wrapT = RepeatWrapping;
    item.texture.repeat.set(1, 1);

    const materialTexture = new MeshBasicMaterial({ map: item.texture });
    const material = new MeshBasicMaterial({ color: color });

    const materials = [material, material, material, material, materialTexture, material];

    const geometry = new BoxGeometry(1, 1);

    const mesh = new Mesh(geometry, materials);
    mesh.up.set(0, 0, 1);
    mesh.scale.z = 0.2;
    mesh.position.z = 0.4;

    mesh.userData.partyLetter = item.partyLetter;

    return mesh;
  });
}
