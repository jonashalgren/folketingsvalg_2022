import { readable } from "svelte/store";
import type { S_E_M_Transition } from "@models";
import { getTransitionMesh } from "./getTransitionMesh";
import { Shape, Color } from "three";

export const _transition = readable<S_E_M_Transition[]>(undefined, function start(set) {
  const size = 40;
  const shape = new Shape();

  const x = size;
  const y = size;
  shape.moveTo(-x, -y);
  shape.lineTo(-x, y);
  shape.lineTo(x, y);
  shape.lineTo(x, -y);

  set([
    getTransitionMesh({ shape, color: new Color("#e6ce51") }),
    getTransitionMesh({ shape, color: new Color("#ba51b7") }),
    getTransitionMesh({ shape, color: new Color("#26d6d2") }),
  ]);
});
