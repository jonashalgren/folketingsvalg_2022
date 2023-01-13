import type { Props } from "./index";

export function setChainedAnims(item: Props) {
  return {
    ...item,
    anims: item.animsGroupedByOverviewPartyLetter.map((item) => {
      return item.reduce((a, b) => {
        return {
          ...b,
          value: {
            inputRange: [...a.value.inputRange, ...b.value.inputRange],
            outputRange: [...a.value.outputRange, ...b.value.outputRange],
          },
        };
      });
    }),
  };
}
