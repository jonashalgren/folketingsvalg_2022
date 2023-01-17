import type { Group } from "three";
import type { S, S_Anims_Mappers, CanvasProperties } from "@models";
import { pipe } from "@helpers";
import { setText } from "./setText";

export type Props = {
  group: Group;
  data: S;
  mapper?: ({ progress }: S_Anims_Mappers) => void;
  canvasProperties: CanvasProperties;
};

export const getTextMapper = pipe(setText);
