type Props = {
  duration?: number;
  fadeOutStrength?: number;
  fadeInStrength?: number;
};

export function getOpacityMapper({ duration = 1000, fadeOutStrength = 0, fadeInStrength = 1 }: Props) {
  let opacity = 1;
  let autoStep = 16.6 / duration;

  return function (isFaded: boolean) {
    if (!isFaded && opacity < fadeInStrength) {
      opacity += autoStep;

      if (opacity > fadeInStrength) {
        opacity = fadeInStrength;
      }
    } else if (isFaded && opacity > fadeOutStrength) {
      opacity -= autoStep;
      if (opacity < fadeOutStrength) {
        opacity = fadeOutStrength;
      }
    }

    return opacity;
  };
}
