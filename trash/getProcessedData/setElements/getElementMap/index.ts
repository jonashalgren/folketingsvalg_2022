import type { S_E_Map_Data } from "@models";

type Props = {
  dimensionZ: number;
  map?: S_E_Map_Data;
};

export function getElementMap({ map }: Props): S_E_Map_Data | undefined {
  return map ? { ...map, type: "map" } : undefined;
}
