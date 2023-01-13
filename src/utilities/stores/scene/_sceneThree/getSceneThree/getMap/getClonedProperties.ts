import type { S_Map_Properties } from "@models";

type Props = {
  mapProperties: S_Map_Properties;
};

export function getClonedProperties({ mapProperties }: Props) {
  return {
    areas: mapProperties.areas.map((item) => {
      return {
        ...item,
        meshes: item.meshes.map((mesh) => {
          mesh.material = mesh.material.clone();
          return mesh.clone();
        }),
      };
    }),
  };
}
