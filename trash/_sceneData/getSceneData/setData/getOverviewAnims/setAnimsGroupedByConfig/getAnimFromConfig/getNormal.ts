import type { S_Overview_Anim_Config_Normal, P, S_Overview_Anim } from "@models";

type Props = {
  config: S_Overview_Anim_Config_Normal;
  party: P;
};

export function getNormal({ config, party }: Props): S_Overview_Anim {
  let value = 0;
  let progression = 0;

  if (config.year === "2022") {
    value = party.procent_af_stemmer_2022;
  } else if (config.year === "2019") {
    value = party.procent_af_stemmer_2019;
  }

  if (config.year === "2022") {
    progression = party.procent_af_stemmer_2022 - party?.procent_af_stemmer_2019 ?? 0;
  } else if (config.year === "2019") {
    progression = 0;
  }
  return {
    partyLetter: party.letter,
    progression: {
      inputRange: [0, config.inputRange[0], config.inputRange[0]],
      outputRange: [0, 0, progression],
    },
    value: {
      inputRange: config.inputRange,
      outputRange: [value, value],
    },
  };
}
