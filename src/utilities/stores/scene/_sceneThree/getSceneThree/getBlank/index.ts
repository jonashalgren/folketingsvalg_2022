import type { CanvasProperties, S_Progress, P_Logo_Mesh, S, P_Leader_Mesh } from "@models";
import { setNGetScene, setNGetSceneCamera, getOutputOffsetZ } from "@helpers";
import type { Group } from "three";

type Props = {
  data: S;
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
  sceneProgress: S_Progress;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  partProperties: Group;
};

export function getBlank({
  data,
  canvasElement,
  canvasProperties,
  sceneProgress,
  partyLogoMesh,
  partyLeaderMesh,
  partProperties,
}: Props) {
  const animsMapper = function () {};

  const { height, width } = canvasProperties;
  const bbox = data?.bBox ?? { x: 100, y: 100 };
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  const outputOffsetZ = getOutputOffsetZ({ camera, bbox });

  return setNGetScene({
    animsMapper,
    partyLogoMesh,
    canvasElement,
    camera,
    outputOffsetZ,
    clonedMeshes: [],
    data,
    sceneProgress,
    partyLeaderMesh,
    canvasProperties,
    partProperties,
  });
}
