import { getOutputZ } from "@helpers";
import { threeProperties } from "@assets";

type Props = {
  outputOffsetZ: number;
  output: [number, number, number][] | number[][];
  isPDivided?: boolean;
};

export function getOutputList({
  outputOffsetZ,
  output,
  isPDivided = false,
}: Props): [number, number, number][] {
  return output.map((item: any) => [
    item[0],
    item[1],
    getOutputZ({ outputOffsetZ, z: item[2] }) / (isPDivided ? threeProperties.pDivider : 1),
  ]) as [number, number, number][];
}
