import { pipe } from "@helpers";
import { setMapperProperties } from "./setMapperProperties";
import { setMapper } from "./setMapper";

import type { S_Number_Properties, S_Number, S_Number_Anim_Mapper_Properties } from "@models";

export type Props = {
  numberProperties: S_Number_Properties;
  data: S_Number;
  mapperProperties?: S_Number_Anim_Mapper_Properties;
  mapper: ({ progress }: { progress: number }) => void;
};

export const getAnimsMapper = pipe(setMapperProperties, setMapper);
