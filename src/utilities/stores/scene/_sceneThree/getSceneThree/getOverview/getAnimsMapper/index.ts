import { pipe } from "@helpers";
import { setMapperProperties } from "./setMapperProperties";
import { setMapper } from "./setMapper";
import type { S_Overview_Anim, S_Overview_Properties, S_Overview_Anim_Mapper_Properties } from "@models";

export type Props = {
  overviewProperties: S_Overview_Properties;
  anims: S_Overview_Anim[];
  mapperProperties: S_Overview_Anim_Mapper_Properties[];
  mapper: ({ progress }: { progress: number }) => void;
};

export const getAnimsMapper = pipe(setMapperProperties, setMapper);
