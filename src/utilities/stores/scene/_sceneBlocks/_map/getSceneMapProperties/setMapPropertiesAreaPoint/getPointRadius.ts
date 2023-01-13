import type { Mesh_Extrude } from "@models";

type Props = {
  areaMeshes: Mesh_Extrude[];
};

export function getPointRadius({ areaMeshes }: Props) {
  return areaMeshes.reduce((a, b) => {
    b.geometry.computeBoundingSphere();
    const { radius } = b.geometry.boundingSphere;
    let divider = 8;

    if (radius > 5) {
      divider = 10;
    } else if (radius > 3) {
      divider = 12;
    } else if (radius > 2) {
      divider = 15;
    } else if (radius > 1.5) {
      divider = 25;
    } else {
      divider = 30;
    }

    const pointRadius = radius / divider;
    return pointRadius > a ? pointRadius : a;
  }, 0);
}
