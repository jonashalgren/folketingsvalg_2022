import { getParty } from "./getParty";
import type { Props } from "../index";

export function setChainedAnims(item: Props) {
  return {
    ...item,
    anims: item.animsGroupedByMapAreas.map((item) => {
      return item.reduce((a, b) => {
        return {
          ...b,
          value: {
            inputRange: [...a.value.inputRange, ...b.value.inputRange],
            outputRange: [...a.value.outputRange, ...b.value.outputRange],
          },
          color: {
            inputRange: [...a.color.inputRange, ...b.color.inputRange],
            outputRange: [...a.color.outputRange, ...b.color.outputRange],
          },
          party: getParty({ a, b }),
        };
      });
    }),
  };
}
