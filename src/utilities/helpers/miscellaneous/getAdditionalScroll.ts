import type { S_Settings, S_S_AdditionalScroll } from "@models";

type Props = {
  sceneSettings: S_Settings;
  index: number;
};

export function getAdditionalScroll({ sceneSettings, index }: Props): S_S_AdditionalScroll {
  return sceneSettings.additionalScroll?.find((item) => item[0] === index) ?? [index, 0, 0];
}
