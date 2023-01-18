import type { S_Overview_Anim_Config_Blank, S_Overview_Anim, P } from "@models";

type Props = {
  config: S_Overview_Anim_Config_Blank;
  party: P;
};

export function getBlank({ config, party }: Props): S_Overview_Anim {
  return {
    partyLetter: party.letter,
    progression: {
      inputRange: config.inputRange,
      outputRange: [0, 0],
    },
    value: {
      inputRange: config.inputRange,
      outputRange: [0, 0],
    },
  };
}
