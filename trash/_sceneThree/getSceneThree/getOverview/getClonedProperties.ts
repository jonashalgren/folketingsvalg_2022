import type { S_BarChart_Properties, S_BarChart_Properties_Bar } from "@models";

type Props = {
  overviewProperties: S_BarChart_Properties;
};

export function getClonedProperties({ overviewProperties }: Props) {
  return {
    ...overviewProperties,
    bars: overviewProperties.bars.map((item: S_BarChart_Properties_Bar) => {
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
