type Props = {
  decimals: number;
};

export function getFontSize({ decimals }: Props) {
  if (decimals === 0) {
    return 45;
  } else if (decimals === 1) {
    return 30;
  } else if (decimals === 2) {
    return 25;
  } else if (decimals === 3) {
    return 20;
  } else {
    return 15;
  }
}
