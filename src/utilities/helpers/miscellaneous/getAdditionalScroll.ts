import type { S, AdditionalScroll } from "@models";

type Props = {
  sceneData: S;
  index: number;
};

export function getAdditionalScroll({ sceneData, index }: Props): AdditionalScroll {
  return sceneData.additionalScroll?.find((item) => item[0] === index) ?? [index, 0, 0];
}
