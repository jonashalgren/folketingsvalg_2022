import { getAnimsMapper } from "./getAnimsMapper";
import type { Group } from "three";
import type {
  S_Overview,
  S_Overview_Properties,
  CanvasProperties,
  S_Progress,
  P_Logo_Mesh,
  P_Leader_Mesh,
} from "@models";
import { setNGetScene, setNGetSceneCamera, getOutputOffsetZ } from "@helpers";

type Props = {
  data: S_Overview;
  sceneProgress: S_Progress;
  overviewProperties: S_Overview_Properties;
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  partProperties: Group;
};

export function getOverview({
  data,
  overviewProperties,
  canvasElement,
  canvasProperties,
  sceneProgress,
  partyLogoMesh,
  partyLeaderMesh,
  partProperties,
}: Props) {
  const { height, width } = canvasProperties;
  const bbox = { x: 44, y: 78 };
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  const outputOffsetZ = getOutputOffsetZ({ camera, bbox });

  const animsMapper = getAnimsMapper({
    anims: data.anims,
    overviewProperties: overviewProperties,
    mapperProperties: [],
    mapper: () => {},
  }).mapper;

  return setNGetScene({
    animsMapper,
    partyLogoMesh,
    canvasElement,
    canvasProperties,
    clonedMeshes: overviewProperties.bars.flatMap((item) => [
      item.rect,
      item.logo,
      item.text,
      item.partyText,
      item.miniText,
    ]),
    data,
    sceneProgress,
    partyLeaderMesh,
    outputOffsetZ,
    camera,
    partProperties,
  });
}
