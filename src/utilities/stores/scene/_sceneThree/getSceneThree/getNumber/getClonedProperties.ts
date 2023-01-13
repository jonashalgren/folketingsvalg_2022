import type { S_Number_Properties } from "@models";

type Props = {
  numberProperties: S_Number_Properties;
};

export function getClonedProperties({ numberProperties }: Props) {
  return {
    text: numberProperties.text.clone(),
  };
}
