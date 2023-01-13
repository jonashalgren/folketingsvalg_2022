import type { S_Overview_Properties } from "@models";

type Props = {
  overviewProperties: S_Overview_Properties;
};

export function getClonedProperties({ overviewProperties }: Props) {
  return {
    ...overviewProperties,
    bars: overviewProperties.bars.map((item) => {
      return {
        ...item,
        rect: item.rect.clone(),
        logo: item.logo.clone(),
        text: item.text.clone(),
        partyText: item.partyText.clone(),
      };
    }),
  };
}
