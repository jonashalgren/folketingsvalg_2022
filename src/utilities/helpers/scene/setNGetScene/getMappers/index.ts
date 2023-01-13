import type { P_Logo_Mesh, S, S_Mappers, P_Leader_Mesh, CanvasProperties } from "@models";
import type { Group, Scene } from "three";
import { getCameraPositionMapper } from "./getCameraPositionMapper";
import { getCameraTargetMapper } from "./getCameraTargetMapper";
import { getTransitionOpacityMapper } from "./getTransitionOpacityMapper";
import { getTransitionLogoMapper } from "./getTransitionLogoMapper";
import { getPartyMapper } from "./getPartyMapper";
import { getTextMapper } from "./getTextMapper";
import { getNumberMapper } from "./getNumberMapper";
import { getPartMapper } from "./getPartMapper";

export * from "./getCameraPositionMapper";
export * from "./getCameraTargetMapper";

type Props = {
  data: S;
  group: Group;
  scene: Scene;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  canvasProperties: CanvasProperties;
  partProperties: Group;
};

export function getMappers({
  data,
  group,
  scene,
  partyLogoMesh,
  partyLeaderMesh,
  canvasProperties,
  partProperties,
}: Props): S_Mappers {
  const { cameraMainPositionMapper, cameraEntryPositionMapper, cameraExitPositionMapper } = getCameraPositionMapper({
    data,
  });

  const { cameraMainTargetMapper, cameraEntryTargetMapper, cameraExitTargetMapper } = getCameraTargetMapper({
    data,
  });

  const partyMapper = getPartyMapper({
    group,
    data,
    partyLogoMesh,
    partyLeaderMesh,
  }).mapper;

  const { transitionOpacityMapper } = getTransitionOpacityMapper({ group, data });

  const { transitionLogoMapper } = getTransitionLogoMapper({ scene, data });

  const partMapper = getPartMapper({ part: data?.part ?? [], partProperties, group }).mapper;

  const textMapper = getTextMapper({ data, group, canvasProperties }).mapper;

  const numberMapper = getNumberMapper({ data, group }).mapper;

  return {
    partMapper,
    numberMapper,
    textMapper,
    partyMapper,
    cameraMainTargetMapper,
    cameraEntryTargetMapper,
    cameraExitTargetMapper,
    cameraMainPositionMapper,
    cameraEntryPositionMapper,
    cameraExitPositionMapper,
    transitionOpacityMapper,
    transitionLogoMapper,
  };
}
