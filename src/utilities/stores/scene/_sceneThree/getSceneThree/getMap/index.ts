import type { S_Map, S_Map_Properties, CanvasProperties, S_Progress, P_Logo_Mesh, P_Leader_Mesh } from "@models";
import { getAnimsMapper } from "./getAnimsMapper";
import { getClonedProperties } from "./getClonedProperties";
import { setNGetScene, setNGetSceneCamera, getOutputOffsetZ } from "@helpers";
import type { Group } from "three";

type Props = {
  data: S_Map;
  mapProperties: S_Map_Properties;
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
  sceneProgress: S_Progress;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  partProperties: Group;
};

export function getMap({
  data,
  sceneProgress,
  mapProperties,
  canvasProperties,
  canvasElement,
  partyLogoMesh,
  partyLeaderMesh,
  partProperties,
}: Props) {
  const { height, width } = canvasProperties;
  const bbox = { x: 85, y: 100 };
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  const outputOffsetZ = getOutputOffsetZ({ camera, bbox });

  const clonedProperties = getClonedProperties({ mapProperties });

  const animsMapper = getAnimsMapper({
    data,
    mapProperties: clonedProperties,
    outputOffsetZ,
    mapperProperties: [],
    mapper: () => {},
  }).mapper;

  return setNGetScene({
    animsMapper,
    canvasElement,
    canvasProperties,
    clonedMeshes: clonedProperties.areas.flatMap((item) => item.meshes),
    data,
    sceneProgress,
    partyLogoMesh,
    partyLeaderMesh,
    outputOffsetZ,
    camera,
    partProperties,
  });
}
