import type { S_Map_Anim } from "@models";

type Props = {
  a: S_Map_Anim;
  b: S_Map_Anim;
};

export function getParty({ a, b }: Props) {
  const lastInputValue = a.party.inputRange[a.party.inputRange.length - 1];
  const middleInputValue = (lastInputValue + b.party.inputRange[0]) / 2;
  const middleOutputValue = a.party.outputRange[a.party.outputRange.length - 1];
  return {
    inputRange: [...a.party.inputRange, middleInputValue, ...b.party.inputRange],
    outputRange: [...a.party.outputRange, middleOutputValue, ...b.party.outputRange],
  };
}
