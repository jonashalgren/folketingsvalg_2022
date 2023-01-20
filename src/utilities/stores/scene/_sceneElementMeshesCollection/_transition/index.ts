import { readable } from "svelte/store";
import type { S_E_Transition_Meshes } from "@models";
import { getTransitionMesh } from "./getTransitionMesh";
import { Shape, Color } from "three";

export const _transition = readable<S_E_Transition_Meshes>(undefined, function start(set) {
  const size = 40;
  const shape = new Shape();

  const x = size;
  const y = size;
  shape.moveTo(-x, -y);
  shape.lineTo(-x, y);
  shape.lineTo(x, y);
  shape.lineTo(x, -y);

  set([
    getTransitionMesh({ index: 0, shape, color: new Color("#e6ce51"), xOffset: 0.3, yOffset: 0.3, size }),
    getTransitionMesh({ index: 1, shape, color: new Color("#ba51b7"), xOffset: 0, yOffset: 0, size }),
    getTransitionMesh({ index: 2, shape, color: new Color("#26d6d2"), xOffset: 0.5, yOffset: -0.2, size }),
  ]);
});
