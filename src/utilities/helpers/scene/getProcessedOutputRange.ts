import type { Vector3Tuple } from "three";

type PropsList = {
  originalOutputRangeList: Vector3Tuple[];
  dimensionZ: number;
};

export function getProcessedOutputRangeList({ originalOutputRangeList, dimensionZ }: PropsList) {
  return originalOutputRangeList.map((item) =>
    getProcessedOutputRangeItem({ dimensionZ, originalOutputRangeItem: item })
  ) as Vector3Tuple[];
}

type PropsItem = {
  originalOutputRangeItem: Vector3Tuple;
  dimensionZ: number;
};

export function getProcessedOutputRangeItem({ originalOutputRangeItem, dimensionZ }: PropsItem): Vector3Tuple {
  return [
    originalOutputRangeItem[0],
    originalOutputRangeItem[1],
    getProcessedZ({ dimensionZ, z: originalOutputRangeItem[2] }),
  ] as Vector3Tuple;
}

export function getProcessedZ({ dimensionZ, z }: { dimensionZ: number; z: number }) {
  return (z / 100) * dimensionZ;
}
