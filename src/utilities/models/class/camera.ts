import type { Motion } from "@models";

export type S_Camera = {
  target: Motion<[number, number, number]>;
  position: Motion<[number, number, number]>;
  entryTarget?: [number, number, number];
  entryPosition?: [number, number, number];
  exitTarget?: [number, number, number];
  exitPosition?: [number, number, number];
};
