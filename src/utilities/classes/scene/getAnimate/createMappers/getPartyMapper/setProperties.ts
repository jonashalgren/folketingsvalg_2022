import { Group } from "three";
import { _isAnimating } from "@stores";
import type { Mesh_Extrude, Mesh_Texture } from "@models";
import { interpolate, degreesToRadians } from "popmotion";
import type { Props } from "./index";
import { getFloatingMapper } from "@helpers";

export function setProperties(item: Props): Props {
  return {
    ...item,
    properties: item.mergedList.map((entry, index) => {
      const size = entry.size ?? 5;
      const group =
        entry.variant === "logo"
          ? item.partyLogoMesh.find((logo) => logo.letter === entry.partyLetter).group
          : item.partyLeaderMesh.find((logo) => logo.letter === entry.partyLetter).group;

      const meshes = group.children.map((item: Mesh_Extrude | Mesh_Texture, index) => {
        const mesh = item.clone();
        const mat: any = item.material;
        if (entry.variant === "logo") {
          mesh.material = mat.clone();
          if (index === 0) {
            mesh.position.set(0, 0, 0.15);
            mesh.visible = !entry?.isLetterHidden ?? true;
          }
        } else if (entry.variant === "leader") {
          mesh.material = mat.map((mat: any) => mat.clone());
        }

        return mesh;
      });

      const scal = index * 0.0005;
      const scal1 = 1 - scal;
      const scal2 = (size * scal) / 2;
      const newGroup = new Group();
      newGroup.add(...meshes);

      const scaler = entry.variant === "logo" ? 0.0124 : 1;
      const scaleX = scaler * size;
      const scaleY = entry.variant === "logo" ? -(scaler * size) : scaler * size;
      const scaleZ = 0.0124 * 5;
      const scale = [scaleX, scaleY, scaleZ] as [number, number, number];
      newGroup.scale.set(...scale);

      item.group.add(newGroup);

      if (entry?.rotation) {
        newGroup.rotation.set(
          degreesToRadians(entry.rotation[0]),
          degreesToRadians(entry.rotation[1]),
          degreesToRadians(entry.rotation[2])
        );
      }

      const positionRange: [number, number, number][] = entry.positionRange.map((entry) => {
        return [entry[0] + scal2, entry[1] - scal2, entry[2]];
      });

      const scaleRange: [number, number, number][] = entry.scaleRange.map((entry) => {
        return [entry[0] * scaleX * scal1, entry[1] * scaleY * scal1, entry[2] * scaleZ + 0.1];
      });

      return {
        mesh: newGroup,
        offset: entry.variant === "logo" ? size / 2 : 0,
        scaleMapper: interpolate(
          scaleRange.length > 0 ? entry.inputRange : [0, 1],
          scaleRange.length > 0 ? scaleRange : [scale, scale]
        ),
        letterPositionYMapper: interpolate([0, 1, 20, 100], [0.6, 0.2, 0.11, 0.105]),
        positionMapper: interpolate(entry.inputRange, positionRange),
        floatingYMapper: getFloatingMapper({ size }),
      };
    }),
  };
}
