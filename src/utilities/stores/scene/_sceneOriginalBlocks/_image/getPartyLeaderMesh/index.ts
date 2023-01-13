import { pipe } from "@helpers";
import type { P_Letter, P_Leader_Mesh } from "@models";
import type { Texture } from "three";
import { setLeaderMesh } from "./setLeaderMesh";

export type Props = {
  textures: { letter: P_Letter; color: string; texture: Texture }[];
  leaderMeshes?: P_Leader_Mesh[];
};

export const getPartyLeaderMesh = pipe(setLeaderMesh);
