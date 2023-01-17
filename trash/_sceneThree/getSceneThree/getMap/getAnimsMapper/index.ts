import { pipe } from "@helpers";
import { setMapperProperties } from "./setMapperProperties";
import { setMapper } from "./setMapper";
import type { S_Map_Properties, S_Map_Anim_Mapper_Properties, S_Map } from "@models";

export type Props = {
  data: S_Map;
  mapProperties: S_Map_Properties;
  mapperProperties: S_Map_Anim_Mapper_Properties[];
  outputOffsetZ: number;
  mapper: ({ progress }: { progress: number }) => void;
};

export const getAnimsMapper = pipe(setMapperProperties, setMapper);
