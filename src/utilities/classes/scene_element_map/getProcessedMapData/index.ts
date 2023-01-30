import type { S_E_Map_Data } from "@models";

type Props = {
  data: S_E_Map_Data;
};

export function getProcessedMapData({ data }: Props) {
  return data;
}
