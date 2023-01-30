import type { Vector3Tuple } from "three";

type PropsList = {
  originalOutputRange: Vector3Tuple[];
  dimensionZ: number;
};

export function getProcessedOutputRangeList({ originalOutputRange, dimensionZ }: PropsList) {
  return originalOutputRange.map(([x, y, z]) => [x, y, getDimensionZ({ dimensionZ, z })]) as Vector3Tuple[];
}

type PropsItem = {
  originalOutputRange: Vector3Tuple;
  dimensionZ: number;
};

export function getProcessedOutputRangeItem({ originalOutputRange, dimensionZ }: PropsItem): Vector3Tuple {
  return [
    originalOutputRange[0],
    originalOutputRange[1],
    getDimensionZ({ dimensionZ, z: originalOutputRange[2] }),
  ] as Vector3Tuple;
}

function getDimensionZ({ dimensionZ, z }: { dimensionZ: number; z: number }) {
  return (z / 100) * dimensionZ;
}
