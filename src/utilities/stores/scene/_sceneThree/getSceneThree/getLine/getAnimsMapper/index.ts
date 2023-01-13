import { pipe } from "@helpers";
import { setMapper } from "./setMapper";

import type { Mesh_Line, Mesh_Text, S_Line } from "@models";

export type Props = {
  lines: {
    line: Mesh_Line;
    text: Mesh_Text;
  }[];
  data: S_Line;
  mapper: ({ progress }: { progress: number }) => void;
};

export const getAnimsMapper = pipe(setMapper);
