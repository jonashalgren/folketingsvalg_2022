import type { Props } from "../index";
import { getTransitionOpacityMapper } from "./getTransitionOpacityMapper";
import { getTransitionLogoMapper } from "./getTransitionLogoMapper";
import { getPartyMapper } from "./getPartyMapper";
import { getTextMapper } from "./getTextMapper";
import { getNumberMapper } from "./getNumberMapper";
import { getPartMapper } from "./getPartMapper";

export function createMappers(props: Props): Props {
  const { data, group, scene, original_blocks, canvasProperties } = props;
  const { cameraPositionMapper, cameraEntryPositionMapper, cameraExitPositionMapper } = getCameraPositionMapper({
    data,
  });

  const { cameraTargetMapper, cameraEntryTargetMapper, cameraExitTargetMapper } = getCameraTargetMapper({
    data,
  });

  const partyMapper = getPartyMapper({
    group,
    data,
    partyLogoMesh: original_blocks.logo,
    partyLeaderMesh: original_blocks.image,
  }).mapper;

  const { transitionOpacityMapper } = getTransitionOpacityMapper({ group, data });

  const { transitionLogoMapper } = getTransitionLogoMapper({ scene, data });

  const partMapper = getPartMapper({
    part: data?.elements.parts ?? [],
    partProperties: original_blocks.figure,
    group,
  }).mapper;

  const textMapper = getTextMapper({ data, group, canvasProperties }).mapper;

  const numberMapper = getNumberMapper({ data, group }).mapper;

  return {
    ...props,
    mappers: {
      partMapper,
      numberMapper,
      textMapper,
      partyMapper,
      transitionOpacityMapper,
      transitionLogoMapper,
    },
  };
}
