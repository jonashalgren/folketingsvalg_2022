import type { S_Overview_Anim_Config, S_Overview_Anim, P } from "@models";
import { getBlank } from "./getBlank";
import { getNormal } from "./getNormal";

type Props = {
  config: S_Overview_Anim_Config;
  party: P;
};

export function getAnimFromConfig({ config, party }: Props): S_Overview_Anim {
  const { variant } = config;
  if (variant === "blank") {
    return getBlank({ config, party });
  } else if (variant === "normal") {
    return getNormal({ config, party });
  }
}
