import { getOutputZ } from "./getOutputZ";

type Props = {
  outputOffsetZ: number;
  output: [number, number, number];
};

export function getOutputItem({ outputOffsetZ, output }: Props) {
  return [output[0], output[1], getOutputZ({ outputOffsetZ, z: output[2] })] as [number, number, number];
}
