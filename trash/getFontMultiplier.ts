type Props = {
  wWidth: number;
};

export function getFontMultiplier({ wWidth }: Props) {
  let multiplier = 1;

  if (wWidth > 1200) {
    multiplier = 1.4;
  } else if (wWidth > 800) {
    multiplier = 1.3;
  } else if (wWidth > 500) {
    multiplier = 1.2;
  } else if (wWidth > 420) {
    multiplier = 1.05;
  } else if (wWidth > 400) {
    multiplier = 1;
  }
  return multiplier;
}
