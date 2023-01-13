import type { Group } from "three";
import type { P_Leader_Mesh, P_Logo_Mesh, S, S_Anims_Mappers, S_Party_Item } from "@models";
import { setMapper } from "./setMapper";
import { setProperties } from "./setProperties";
import { setMergedList } from "./setMergedList";
import { pipe } from "@helpers";

export type Props = {
  group: Group;
  data: S;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  mergedList?: S_Party_Item[];
  mapper?: ({ progress }: S_Anims_Mappers) => void;
  properties?: {
    mesh: Group;
    offset: number;
    positionMapper: (val: number) => [number, number, number];
    scaleMapper: (val: number) => [number, number, number];
    floatingYMapper: (val: number) => number;
    letterPositionYMapper: (val: number) => number;
  }[];
};

export const getPartyMapper = pipe(setMergedList, setProperties, setMapper);
