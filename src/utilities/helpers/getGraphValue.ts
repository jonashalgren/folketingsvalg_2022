type Props = {
  value: number;
  decimals?: number;
  unit?: string;
};
export function getGraphValue({ value, decimals = 1, unit = "" }: Props) {
  if (value < 0) {
    return `-${Math.abs(value).toFixed(decimals)}${unit}`.replace(".", ",");
  } else {
    return `${value.toFixed(decimals)}${unit}`.replace(".", ",");
  }
}
