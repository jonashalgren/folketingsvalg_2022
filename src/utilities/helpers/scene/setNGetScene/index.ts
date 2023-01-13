import type { CanvasProperties, S_Progress, S, Mesh_Text, Mesh_Line, P_Logo_Mesh, P_Leader_Mesh } from "@models";
import { PerspectiveCamera, Scene } from "three";
import type { Mesh, Group } from "three";
import { setSceneLight } from "./setSceneLight";
import { setNGetSceneControls } from "./setNGetSceneControls";
import { setNGetSceneMeshGroup } from "./setNGetSceneMeshGroup";
import { getRender } from "./getRender";
import { getMappers } from "./getMappers";
export * from "./setNGetSceneCamera";
export * from "./setNGetSceneControls";
export * from "./setSceneLight";
export * from "./getPerspectiveData";
import { getPerspectiveData } from "./getPerspectiveData";
type Props = {
  canvasElement: HTMLCanvasElement;
  sceneProgress: S_Progress;
  data: S;
  clonedMeshes: (Mesh<any, any> | Mesh_Line | Group | Mesh_Text)[];
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  animsMapper: ({ progress }: { progress: number }) => void;
  outputOffsetZ: number;
  camera: PerspectiveCamera;
  canvasProperties: CanvasProperties;
  partProperties: Group;
};

export function setNGetScene({
  canvasElement,
  data,
  sceneProgress,
  clonedMeshes,
  partyLogoMesh,
  partyLeaderMesh,
  animsMapper,
  outputOffsetZ,
  camera,
  canvasProperties,
  partProperties,
}: Props) {
  const scene = new Scene();
  //LIGHT
  setSceneLight({ scene });
  //CONTROLS
  const controls = setNGetSceneControls({ camera, element: canvasElement });
  //GROUP
  const group = setNGetSceneMeshGroup({
    scene,
    meshes: clonedMeshes,
  });

  const perspectiveData = getPerspectiveData({ outputOffsetZ, data });
  const mappers = getMappers({
    data: perspectiveData,
    group,
    scene,
    partyLogoMesh,
    partyLeaderMesh,
    canvasProperties,
    partProperties,
  });
  const render = getRender({ animsMapper, camera, controls, mappers, scene, sceneProgress, data });

  return {
    scene,
    camera,
    render,
  };
}
