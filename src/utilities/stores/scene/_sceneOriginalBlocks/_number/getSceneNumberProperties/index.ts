import { pipe } from "@helpers";
import { setText } from "./setText";
import type { S_Number_Properties } from "@models";

export type Props = {
  numberProperties?: S_Number_Properties;
};

export const getSceneNumberProperties = pipe(setText);
