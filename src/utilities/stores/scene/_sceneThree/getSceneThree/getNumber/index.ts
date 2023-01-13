import { getAnimsMapper } from "./getAnimsMapper";
import { getClonedProperties } from "./getClonedProperties";
import type { Group } from "three";
import type {
  S_Number,
  S_Number_Properties,
  CanvasProperties,
  S_Progress,
  P_Logo_Mesh,
  P_Leader_Mesh,
} from "@models";
import { setNGetScene, setNGetSceneCamera, getOutputOffsetZ } from "@helpers";

type Props = {
  data: S_Number;
  sceneProgress: S_Progress;
  numberProperties: S_Number_Properties;
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  partProperties: Group;
};

export function getNumber({
  data,
  numberProperties,
  canvasElement,
  canvasProperties,
  sceneProgress,
  partyLogoMesh,
  partyLeaderMesh,
  partProperties,
}: Props) {
  const clonedProperties = getClonedProperties({ numberProperties });

  const { height, width } = canvasProperties;
  const bbox = { x: 100, y: 100 };
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  const outputOffsetZ = getOutputOffsetZ({ camera, bbox });

  const animsMapper = getAnimsMapper({
    data: data,
    numberProperties: clonedProperties,
    mapper: () => {},
  }).mapper;

  return setNGetScene({
    animsMapper,
    partyLogoMesh,
    canvasElement,
    canvasProperties,
    clonedMeshes: [clonedProperties.text],
    data,
    sceneProgress,
    outputOffsetZ,
    camera,
    partyLeaderMesh,
    partProperties,
  });
}
