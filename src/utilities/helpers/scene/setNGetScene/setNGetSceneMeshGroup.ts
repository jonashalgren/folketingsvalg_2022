import type { Mesh, Scene } from "three";
import { Group } from "three";
import type { Mesh_Text, Mesh_Line } from "@models";

type Props = {
  meshes: (Mesh<any, any> | Group | Mesh_Line | Mesh_Text)[];
  scene: Scene;
};
export function setNGetSceneMeshGroup({ meshes, scene }: Props) {
  const group = new Group();
  if (meshes.length > 0) {
    group.add(...meshes);
  }
  scene.add(group);
  return group;
}
