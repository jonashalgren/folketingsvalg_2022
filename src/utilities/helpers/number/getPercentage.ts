type Props = {
  from: number;
  to: number;
  val: number;
};

export function getPercentage({ from, to, val }: Props) {
  const progress = val - from;
  const diff = to - from;
  const value = (progress / diff) * 100;
  return value > 100 ? 100 : value < 0 ? 0 : value;
}
