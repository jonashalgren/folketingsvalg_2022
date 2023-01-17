import type { P_Letter } from "@models";
import { Texture, RepeatWrapping } from "three";
import { Color, Mesh, MeshBasicMaterial, BoxGeometry, Group } from "three";

export type Props = {
  textures: { letter: P_Letter; color: string; texture: Texture }[];
};

export function getImages(item: Props) {
  return item.textures.map((entry) => {
    const color = new Color(entry.color);

    entry.texture.wrapS = RepeatWrapping;
    entry.texture.wrapT = RepeatWrapping;
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
    group.userData.partyLetter = entry.letter;

    return {
      group,
      partyLetter: entry.letter,
    };
  });
}
