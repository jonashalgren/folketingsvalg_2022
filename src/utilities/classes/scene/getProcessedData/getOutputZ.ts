type Props = {
  outputOffsetZ: number;
  z: number;
};

export function getOutputZ({ outputOffsetZ, z }: Props) {
  return (z / 100) * outputOffsetZ;
}
